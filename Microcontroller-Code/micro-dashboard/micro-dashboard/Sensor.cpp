/**
 * @file Sensor.cpp
 * @author Luisel Muller
 * @brief 
 * @version 0.1
 * @date 2022-11-27
 * 
 * @copyright Copyright (c) 2022
 * 
 */

/**
 * @brief 
 * 
 * @return float 
 */
float Sensor::getData(){
    return data;
}

/**
 * @brief 
 * 
 * @param d 
 */
void Sensor::setData(float d){
    data = d;
}

/**
 * @brief 
 * 
 * @return true 
 * @return false 
 */
bool Sensor::getSensorState(){
    return alert;
}

/**
 * @brief 
 * 
 * @return String 
 */
String Sensor::getNotification(){
    return notification;
}

/**
 * @brief 
 * 
 * @param s 
 */
void Sensor::setSensorState(bool s){
    alert = s;
}

/**
 * @brief 
 * 
 * @param n 
 */
void Sensor::setNotification(String n){
    notification = n;
}