/**
   @file TemperatureProbeSensor.cpp
   @author Luisel Muller
   @brief
   @version 0.1
   @date 2022-11-27

   @copyright Copyright (c) 2022

*/
#include "TemperatureProbeSensor.h"

TemperatureProbeSensor::TemperatureProbeSensor(int pin): Sensor("Probe temperature at dangerous levels") {
  OneWire* oneWire = new OneWire(pin);
  dallasSensor.setOneWire(oneWire);
}

String TemperatureProbeSensor::getID() {
  return "TemperatureProbe";
}

float TemperatureProbeSensor::getData() {
  if (currentTemp > 110 || currentTemp < 40)
    this->setSensorState(true);
  else
    this->setSensorState(false);

  return currentTemp;
}

void TemperatureProbeSensor::setProbeTemp(float temp) {
  currentTemp = temp;
}

DallasTemperature* TemperatureProbeSensor::getSensor() {
  return &dallasSensor;
}
