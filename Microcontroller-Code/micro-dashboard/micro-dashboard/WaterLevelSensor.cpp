/**
 * @file WaterLevelSensor.cpp
 * @author Luisel Muller
 * @brief 
 * @version 0.1
 * @date 2022-11-27
 * 
 * @copyright Copyright (c) 2022
 * 
 */

 #include "WaterLevelSensor.h"
 

WaterLevelSensor::WaterLevelSensor(int p1, int p2) : Sensor("Water level is over 80%") {  
  trs = p1;
  ech = p2;
} 

String WaterLevelSensor::getID() {
  return "WaterLevel";
}

float WaterLevelSensor::getData() {
  return waterLevel;
}

void WaterLevelSensor::setData() {
  digitalWrite(trs, LOW);
  delayMicroseconds(2);
  digitalWrite(trs, HIGH);
  delayMicroseconds(10);
  digitalWrite(trs, LOW);

  float echo = pulseIn(ech, HIGH);

  float distance = echo / 58;
  distance -= 6;  //offset
  distance -= 50; // water height 0 - 50cm

  waterLevel = 2 * distance;
  
  if (waterLevel > 80)
    this->setSensorState(true);
  else
    this->setSensorState(false);
}
