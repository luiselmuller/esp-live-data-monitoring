#include "Temperature.h"

Temperature::Temperature(int pin){
  OneWire* oneWire = new OneWire(pin);
  dallasSensor.setOneWire(oneWire);
}


float Temperature::getData(){
  return currentTemp;
}
//
//bool Temperature::declareEmergency(){
//  if(currentTemp < 21 || currentTemp > 33){
//    this->setEmergency(true);
//    return true;
//  }
//  else this->setEmergency(false);
//  return false;
//}


void Temperature::setTemperature(int temp){
  currentTemp = temp;
}


DallasTemperature* Temperature::getSensor(){
  return &dallasSensor;
}
