/**
 * @file AirHumiditySensor.cpp
 * @author Luisel Muller
 * @brief 
 * @version 0.1
 * @date 2022-11-27
 * 
 * @copyright Copyright (c) 2022
 * 
 */

 #include "AirHumiditySensor.h"
 

AirHumiditySensor::AirHumiditySensor() : Sensor("Humidity is above 85%") { }

String AirHumiditySensor::getID(){
  return "Humidity";
}


float AirHumiditySensor::getData() {
  return humidity;
}

void AirHumiditySensor::setAirHum(int hum) {
  if (hum > 85)
    this->setSensorState(true);
  else
    this->setSensorState(false);

  humidity = hum;

}
