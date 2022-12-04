#ifndef WaterLevelSensor_h
#define WaterLevelSensor_h

#include "Sensor.h"


class WaterLevelSensor  : public Sensor{
  public:
    WaterLevelSensor(int pin1, int pin2);
    int getData();
    void setData();
    String getID();
    
  private:
    int trs;
    int ech;
    float waterLevel = 0;
    String sensorID = "WaterLevel";
  
};

#endif
