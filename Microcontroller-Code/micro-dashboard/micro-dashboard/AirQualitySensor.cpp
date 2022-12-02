/**
 * @file AirQualitySensor.cpp
 * @author Luisel Muller
 * @brief 
 * @version 0.1
 * @date 2022-11-27
 * 
 * @copyright Copyright (c) 2022
 * 
 */

 #include "AirQualitySensor.h"
 

AirQualitySensor::AirQualitySensor(int pin) : Sensor("Gas levels are dangerous") {  
  pin = pin;
} 

String AirQualitySensor::getID(){
  return "AirQuality";
}

float AirQualitySensor::getData() {
  return gas;
}

void AirQualitySensor::setData() {
  gas = analogRead(pin);
  
  if (gas > 600)
    this->setSensorState(true);
  else
    this->setSensorState(false);
}
