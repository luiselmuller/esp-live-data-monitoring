#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include <addons/TokenHelper.h>


// Firebase data object
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long dataMillis = 0;
unsigned long dataDelay = 25000;

// Declare sensor objects

// Array of sensor objects being used
String sensors[6] = {"Temperature", "Humidity", "GroundMovements", "SoilMoisture", "AirQuality", "WaterLevel"};

void setup() {
  Serial.begin(115200);
  initWifi();
}

void loop() {
  unsigned long currentTime = millis();
  if(Firebase.ready() && (currentTime - dataMillis > dataDelay)){
    dataMillis = millis();
    // Updating the data cards
    updateDataCards();
    
    // Updating the device statistics
    updateDeviceStatistics();
  }

}

//////////////////// Data Update Functions ////////////////////

template<class T>
void updateField(String collection, String docID, String field, String type, T value){
  FirebaseJson content;
  String documentPath = collection + "/" + docID;
  
  content.set("fields/" + field + "/" + type, value);
 
  if (Firebase.Firestore.patchDocument(&fbdo, FIREBASE_PROJECT_ID, "" /* databaseId can be (default) or empty */, documentPath.c_str(), content.raw(), field /* updateMask */))
    Serial.printf("ok\n%s\n\n", fbdo.payload().c_str());
  else
    Serial.println(fbdo.errorReason());
}

void updateDataCards(){
  for(int i = 0; i < 6; i++){
    updateField("Sensors", sensors[i], "reading", "integerValue", String(random(100)).c_str());
  }
}

void updateDeviceStatistics(){
  updateField("DeviceStatistics", "Signal", "info", "stringValue", String(WiFi.RSSI()).c_str());
  updateField("DeviceStatistics", "Uptime", "info", "stringValue", String(millis()).c_str());
}


//////////////////// Helpers //////////////////////

void initWifi(){
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  Serial.print("Connecting to WiFi");
  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(200);
  }

  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);

  config.api_key = API_KEY;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASS;

  config.token_status_callback = tokenStatusCallback;

  fbdo.setResponseSize(2048);
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  // Setting status to online
  updateField("DeviceStatistics", "Status", "info", "booleanValue", true); 
  Serial.println("> Set device status to Online");

  // Setting the device MAC address and database version
  updateField("DeviceStatistics", "Address", "info", "stringValue", String(WiFi.macAddress()).c_str());
  updateField("DeviceStatistics", "Database", "info", "stringValue", String(FIREBASE_CLIENT_VERSION).c_str());
  
}
