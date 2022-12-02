#ifndef AirHumiditySensor_h
#define AirHumiditySensor_h

#include "Sensor.h"
#include <dht_nonblocking.h>


class AirHumiditySensor  : public Sensor{
  public:
    AirHumiditySensor();
    float getData();
    void setAirHum(int hum);
    String getID();
    
  private:
    int pin;
    float humidity = 0.0;
    
  
};

#endif
