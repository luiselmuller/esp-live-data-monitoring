#ifndef AirQualitySensor_h
#define AirQualitySensor_h

#include "Sensor.h"



class AirQualitySensor  : public Sensor{
  public:
    AirQualitySensor(int pin);
    float getData();
    void setData();
    String getID();
    
  private:
    int pin;
    float gas = 0.0;
    
};

#endif
