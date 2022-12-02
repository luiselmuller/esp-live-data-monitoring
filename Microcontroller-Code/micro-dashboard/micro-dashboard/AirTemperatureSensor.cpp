/**
 * @file AirTemperatureSensor.cpp
 * @author Luisel Muller
 * @brief 
 * @version 0.1
 * @date 2022-11-27
 * 
 * @copyright Copyright (c) 2022
 * 
 */

 #include "AirTemperatureSensor.h"
 

AirTemperatureSensor::AirTemperatureSensor() : Sensor("Temperature at dangerous levels") { }

String AirTemperatureSensor::getID() {
  return "Temperature";
}

float AirTemperatureSensor::getData() {
  return temperature;
}

void AirTemperatureSensor::setAirTemp(int temp) {
  if (temp > 110 || temp < 40)
    this->setSensorState(true);
  else
    this->setSensorState(false);

  temperature = temp;

}
