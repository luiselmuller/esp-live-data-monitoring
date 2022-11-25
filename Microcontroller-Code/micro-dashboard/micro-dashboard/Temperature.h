#ifndef Temperature_h
#define Temperature_h

#include "Arduino.h"
#include <DallasTemperature.h>
#include <OneWire.h>
#include <NonBlockingDallas.h>

class Temperature{
  public:
    Temperature(int pin);
    float getData();
    //bool danger();
    void setTemperature(int temp);
    DallasTemperature* getSensor();

  private:
    int pin;
    volatile float currentTemp = 0.0;
    DallasTemperature dallasSensor;

};

#endif
