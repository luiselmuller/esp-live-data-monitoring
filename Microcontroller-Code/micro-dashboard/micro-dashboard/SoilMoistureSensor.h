#ifndef SoilMoistureSensor_h
#define SoilMoistureSensor_h

#include "Sensor.h"



class SoilMoistureSensor  : public Sensor{
  public:
    SoilMoistureSensor(int pin);
    float getData();
    void setData();
    String getID();
    
  private:
    int pin;
    float moisture = 0.0;
    
};

#endif
