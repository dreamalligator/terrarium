//based on the DHT and TSL examples by Ladyada

//https://github.com/nebulousdog/terrarium
//Fonda Tong and Tom Spalding
//http://antivapor.net

#include "DHT.h"
#include <Wire.h>
#include "TSL2561.h"

#define LUMPIN A0      //Photoresistor PIN
#define DHTPIN 2       //DHT PIN
#define DHTTYPE DHT22  //DHT22 (AM2302)

DHT dht(DHTPIN,DHTTYPE);
TSL2561 tsl(TSL2561_ADDR_FLOAT);

void setup() {
  Serial.begin(9600);
  
  if (!tsl.begin()) {
    Serial.println("No TSL 2561 sensor?");
    while (1);
  }

  tsl.setGain(TSL2561_GAIN_16X);      // set 16x gain (for dim situations)
  tsl.setTiming(TSL2561_INTEGRATIONTIME_13MS);  // shortest integration time (bright light)
  Serial.print("luminosity,ir,full,visible,lux,humidity,temperature,heatindex\n");
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

  uint32_t lum = tsl.getFullLuminosity();
  uint16_t ir, full;
  ir = lum >> 16;
  full = lum & 0xFFFF;
  
  Serial.print(l);
  Serial.print(",");
  Serial.print(ir);
  Serial.print(",");
  Serial.print(full);
  Serial.print(",");
  float v = full-ir;
  Serial.print(v);
  Serial.print(",");
  float l2 = tsl.calculateLux(full,ir);
  Serial.print(l2);
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
