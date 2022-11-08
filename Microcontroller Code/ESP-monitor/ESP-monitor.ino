#define DEBUG_SW 1

#include <WiFi.h>
#include <WiFiClient.h>
#include <FirebaseESP32.h>

// Provide the token generation process info.
#include <addons/TokenHelper.h>

// Provide the RTDB payload printing info and other helper functions.
#include <addons/RTDBHelper.h>

// Firebase credentials
#define FIREBASE_HOST "esp32-monitor-2244b-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "G4ZrPCRachbU8HjthGEwSikUHDs15zkwsNHFfS05"

// Wifi credentials
#define ssid "LIB-9709159"
#define pass "p6gwFntFyckm"

// Firebase object
FirebaseData firebaseData;
FirebaseJson json;
bool isOnline;

// Uptime variable
unsigned long uptime = 0;

void setup() {
  Serial.begin(115200);

  WiFi.begin(ssid, pass);
  Serial.print("Attempting connection to WiFi network: ");
  Serial.println(ssid);
  while(WiFi.status() != WL_CONNECTED){
    isOnline = false;
    Serial.print("=");
    delay(100);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  //Database read timeout 1 minute (max 15 mins)
  Firebase.setReadTimeout(firebaseData, 1000 * 60);
  // tiny(1s) small(10s) medium(30s) large(60s)
  Firebase.setwriteSizeLimit(firebaseData, "tiny");

  // Option to allow get/delete functions (PUT and DELETE HTTP requests
  // Firebase.enableClassicRequest(firebaseData,true);

  Serial.println("---------------------------------------------------");
  Serial.println("Connected...");
  json.set("/isOnline", true);
  Firebase.RTDB.setJSON(&firebaseData, "/isOnline", &json);
}

void loop() {  
  // get data from firebase
  Firebase.getBool(firebaseData, "/isOnline/isOnline");
  isOnline = firebaseData.to<bool>(); // convert to the correct type

  // Send data in non blocking way every certain amount of time

  
  Serial.println(isOnline);
  delay(500);
  


}
