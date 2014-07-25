//based on DHT example by Ladyada

//http://antivapor.net
//Fonda Tong

#include "DHT.h"

#define LUMPIN A0      //Photoresistor PIN
#define DHTPIN 2       //DHT PIN
#define DHTTYPE DHT22  //DHT22 (AM2302)

DHT dht(DHTPIN,DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.print("luminosity,humidity,temperature,heatindex\n");
  dht.begin();
}

void loop() {
  delay(2000);

  float h = dht.readHumidity();//humidity
  float t = dht.readTemperature();//celsius
  float f = dht.readTemperature(true);//fahrenheit
  float l = analogRead(LUMPIN);//luminosity

  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println("DHT FAIL!");
    return;
  }

  float hi = dht.computeHeatIndex(f,h);//heat index

  Serial.print(l);
  Serial.print(",");
  Serial.print(h);
  Serial.print(",");
  Serial.print(t);
  Serial.print(",");
  Serial.print(f);
  Serial.print(",");
  Serial.print(hi);
  Serial.print("\n");
}
