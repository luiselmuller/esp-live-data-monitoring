#ifndef TemperatureProbeSensor_h
#define TemperatureProbeSensor_h

#include "Sensor.h"
#include <DallasTemperature.h>
#include <OneWire.h>
#include <NonBlockingDallas.h>

class TemperatureProbeSensor : public Sensor{
  public:
    TemperatureProbeSensor(int pin);
    float getData();
    void setProbeTemp(float temp);
    DallasTemperature* getSensor();
    String getID();

  private:
    int pin;
    volatile float currentTemp = 0.0;
    DallasTemperature dallasSensor;

};

#endif
