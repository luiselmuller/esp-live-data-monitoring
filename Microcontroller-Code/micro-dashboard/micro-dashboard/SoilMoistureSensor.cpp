/**
 * @file SoilMoistureSensor.cpp
 * @author Luisel Muller
 * @brief 
 * @version 0.1
 * @date 2022-11-27
 * 
 * @copyright Copyright (c) 2022
 * 
 */

 #include "SoilMoistureSensor.h"
 

SoilMoistureSensor::SoilMoistureSensor(int pin) : Sensor("Soil Moisture at unwanted percentage") {  
  pin = pin;
} 

String SoilMoistureSensor::getID() {
  return "SoilMoisture";
}

float SoilMoistureSensor::getData() {
  return moisture;
}

void SoilMoistureSensor::setData() {
  int moistureValue = analogRead(pin);
  moisture = map(moistureValue, 0, 1023, 0, 100);
  
  if (moisture > 85 || moisture < 30)
    this->setSensorState(true);
  else
    this->setSensorState(false);
}
