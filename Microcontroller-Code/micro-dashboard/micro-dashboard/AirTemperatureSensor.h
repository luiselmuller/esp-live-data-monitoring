#ifndef AirTemperatureSensor_h
#define AirTemperatureSensor_h

#include "Sensor.h"
#include <dht_nonblocking.h>


class AirTemperatureSensor  : public Sensor{
  public:
    AirTemperatureSensor();
    float getData();
    void setAirTemp(int temp);
    String getID();
    
  private:
    int pin;
    float temperature = 0.0;
    
  
};

#endif
