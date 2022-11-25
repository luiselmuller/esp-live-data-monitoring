#ifndef AirTemperature_h
#define AirTemperature_h

#include <dht_nonblocking.h>


class AirTemperature {
  public:
    AirTemperature(int pin);
    float getData();
    DHT_nonblocking* getSensor();

  private:
    int pin;
    volatile float currentTemp = 0.0;
    volatile float currentHum = 0.0;
    DHT_nonblocking dht_sensor(pin, DHT_TYPE_22 );
  
};

#endif
