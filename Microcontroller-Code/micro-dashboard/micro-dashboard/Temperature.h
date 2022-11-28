#ifndef Temperature_h
#define Temperature_h

#include "Sensor.h"
#include <DallasTemperature.h>
#include <OneWire.h>
#include <NonBlockingDallas.h>

class Temperature: Sensor("Temperature reaching dangerous range"){
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
