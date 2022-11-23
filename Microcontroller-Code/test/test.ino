
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include <addons/TokenHelper.h>

#define WIFI_SSID "LIB-9709159"
#define WIFI_PASSWORD "p6gwFntFyckm"

#define API_KEY "AIzaSyCeiMOP52fq_dPAdTG3sWCSbSLDGuJwS2g"
#define FIREBASE_PROJECT_ID "esp32-monitor-2244b"

#define USER_EMAIL "luiselmuller@gmail.com"
#define USER_PASSWORD "h9LZCLBS"

// Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long dataMillis = 0;
int count = 0;

bool taskcomplete = false;

void setup()
{

    Serial.begin(115200);

    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to Wi-Fi");
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(300);
    }
    Serial.println();
    Serial.print("Connected with IP: ");
    Serial.println(WiFi.localIP());
    Serial.println();

    Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);

    config.api_key = API_KEY;

    auth.user.email = USER_EMAIL;
    auth.user.password = USER_PASSWORD;

    // Assign the callback function for the long running token generation task 
    config.token_status_callback = tokenStatusCallback; // see addons/TokenHelper.h

    // Limit the size of response payload to be collected in FirebaseData
    fbdo.setResponseSize(2048);

    Firebase.begin(&config, &auth);
    Firebase.reconnectWiFi(true);
}

String sensors[6] = {"Temperature", "Humidity", "GroundMovements", "SoilMoisture", "AirQuality", "WaterLevel"};
String deviceStatistics[5] = {"Address", "Database", "Signal", "Status", "Uptime"}; // MIGHT USE

float chartData[10] = {0};

void loop(){
    
    // Firebase.ready() should be called repeatedly to handle authentication tasks.

    if(Firebase.ready() && (millis() - dataMillis > 5000 || dataMillis == 0)){
        dataMillis = millis();

        // Update sensor cards
        updateSensorCards();
        

        // Updating device statistics
        updateDeviceStatistics();
        

        // SENSOR CHARTS ****
        
    }
}

void updateSensorCards(){
  // For the usage of FirebaseJson, see examples/FirebaseJson/BasicUsage/Create.ino
  FirebaseJson content;
  String documentPath = " ";
  
  for(int i = 0; i < 6; i++){
          // aa is the collection id, bb is the document id.
          documentPath = "Sensors/" + sensors[i];
               
          if (!taskcomplete)
          {
              taskcomplete = true;
  
          }
  
          count = random(100);
          content.clear();
          content.set("fields/reading/integerValue", String(count).c_str());
  
          Serial.print("Update a document... ");
  
          if (Firebase.Firestore.patchDocument(&fbdo, FIREBASE_PROJECT_ID, "" /* databaseId can be (default) or empty */, documentPath.c_str(), content.raw(), "reading" /* updateMask */))
              Serial.printf("ok\n%s\n\n", fbdo.payload().c_str());
          else
              Serial.println(fbdo.errorReason());
          
        }
}

void updateDeviceStatistics(){
// For the usage of FirebaseJson, see examples/FirebaseJson/BasicUsage/Create.ino
        FirebaseJson content;
        String documentPath = " ";
        
        // ***ADDRESS
        documentPath = "DeviceStatistics/Address";
                
        content.clear();
        content.set("fields/info/stringValue", String(WiFi.macAddress()).c_str());
  
        Serial.print("Update a document... ");
  
        if (Firebase.Firestore.patchDocument(&fbdo, FIREBASE_PROJECT_ID, "" /* databaseId can be (default) or empty */, documentPath.c_str(), content.raw(), "info" /* updateMask */))
            Serial.printf("ok\n%s\n\n", fbdo.payload().c_str());
        else
            Serial.println(fbdo.errorReason());

        // ***DATABASE
        documentPath = "DeviceStatistics/Database";
        
        content.clear();
        content.set("fields/info/stringValue", String(FIREBASE_CLIENT_VERSION).c_str());
  
        Serial.print("Update a document... ");
  
        if (Firebase.Firestore.patchDocument(&fbdo, FIREBASE_PROJECT_ID, "" /* databaseId can be (default) or empty */, documentPath.c_str(), content.raw(), "info" /* updateMask */))
            Serial.printf("ok\n%s\n\n", fbdo.payload().c_str());
        else
            Serial.println(fbdo.errorReason());

        // ***LASTONLINE


        // ***MICROCONTROLLER


        // ***SIGNAL
        documentPath = "DeviceStatistics/Signal";
        
        content.clear();
        content.set("fields/info/stringValue", String(WiFi.RSSI()).c_str());
  
        Serial.print("Update a document... ");
  
        if (Firebase.Firestore.patchDocument(&fbdo, FIREBASE_PROJECT_ID, "" /* databaseId can be (default) or empty */, documentPath.c_str(), content.raw(), "info" /* updateMask */))
            Serial.printf("ok\n%s\n\n", fbdo.payload().c_str());
        else
            Serial.println(fbdo.errorReason());

        // ***STATUS


        // ***UPTIME
        documentPath = "DeviceStatistics/Uptime";
        
        content.clear();
        content.set("fields/info/stringValue", String(millis()).c_str());
  
        Serial.print("Update a document... ");
  
        if (Firebase.Firestore.patchDocument(&fbdo, FIREBASE_PROJECT_ID, "" /* databaseId can be (default) or empty */, documentPath.c_str(), content.raw(), "info" /* updateMask */))
            Serial.printf("ok\n%s\n\n", fbdo.payload().c_str());
        else
            Serial.println(fbdo.errorReason());
  
}
