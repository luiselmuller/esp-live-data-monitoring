/**
 * @file Temperature.cpp
 * @author Luisel Muller
 * @brief 
 * @version 0.1
 * @date 2022-11-27
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include "Temperature.h"

Temperature::Temperature(int pin){
  OneWire* oneWire = new OneWire(pin);
  dallasSensor.setOneWire(oneWire);
}


float Temperature::getData(){
  if(currentTemp > 110 || currentTemp < 40)
    setSensorState(true);
  else
    setSensorState(false);
  
  return currentTemp;
}

void Temperature::setTemperature(int temp){
  currentTemp = temp;
}

DallasTemperature* Temperature::getSensor(){
  return &dallasSensor;
}
