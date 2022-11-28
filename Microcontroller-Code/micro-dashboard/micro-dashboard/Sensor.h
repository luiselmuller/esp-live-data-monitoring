#ifndef Sensor_h
#define Sensor_h

class Sensor {
  public:
    Sensor(String n){notification = n}
    float getData();
    void setData();
    bool getSensorState();
    String getNotification();
    void setSensorState();
    void setNotification();
    

  private:
    bool alert = false;
    String notification = " ";
    float data = 0.0;
};

#endif
