#Terrarium Notebook
Fonda and I are starting a new terrarium for carnivorous plants.

We'll be thoroughly documenting this project with a physical lab notebook, supplemented with [IPython Notebook](https://github.com/ipython/ipython)s, and light/humidity/temperature sensors attached to a Raspberry Pi.

##Plants
The following are the original set of plants that we will be using in this terraria.

###From seed
We'll be trying to propagate the following from seed.

* [Byblis liniflora](https://en.wikipedia.org/wiki/Byblis_liniflora) - Rainbow Plant
* [Darlingtonia californica](https://en.wikipedia.org/wiki/Darlingtonia_californica) - Cobra Lily
* [Utricularia subulata](https://en.wikipedia.org/wiki/Utricularia_subulata) - Zigzag Bladderwort
* [Pinguicula lusitanica](https://en.wikipedia.org/wiki/Pinguicula_lusitanica) - Pale Butterwort

We may document this species separately.

* [Proboscidea parviflora](https://en.wikipedia.org/wiki/Proboscidea_parviflora) var. hohokamiania - Devil's Claw

###From small plantlet
The following are received bare-root, wrapped in sphagnum moss.

* [Drosera rotundifolia](https://en.wikipedia.org/wiki/Drosera_rotundifolia) - Round-Leafed Sundew
* [Drosera filiformis](https://en.wikipedia.org/wiki/Drosera_filiformis) tracyi - Thread-Leafed Sundew, white form
* [Drosera capensis](https://en.wikipedia.org/wiki/Drosera_capensis) - Cape Sundew, typical form
* [Sarracenia leucophylla](https://en.wikipedia.org/wiki/Sarracenia_leucophylla) - White-topped Pitcher Plant
* [Nepenthes 'Miranda'](https://en.wikipedia.org/wiki/Nepenthes_%27Miranda%27) ([N. maxima](https://en.wikipedia.org/wiki/Nepenthes_maxima) x [N. northiana](https://en.wikipedia.org/wiki/Nepenthes_northiana))
* [Sarracenia purpurea](https://en.wikipedia.org/wiki/Sarracenia_purpurea) purpurea - Northern Purple Pitcher Plant

#Sensors
* [DHT22](http://www.adafruit.com/products/385) ([datasheet](https://www.adafruit.com/datasheets/DHT22.pdf)) - temperature and humidity, humidity 0-100%RH, temperature -40 - 125°C, **NOTE: avoid dew warning**
* [TSL2561](https://www.adafruit.com/products/439) ([datasheet](https://www.adafruit.com/datasheets/TSL256x.pdf))- luminosity, 0.1 to 40,000 Lux
* [CdS photoresistor](https://www.adafruit.com/products/161) ([datasheet 1](https://learn.adafruit.com/system/assets/assets/000/010/127/original/PDV-P8001.pdf), [datasheet 2](https://learn.adafruit.com/system/assets/assets/000/010/128/original/DTS_A9950_A7060_B9060.pdf)) - ~5-200KΩ
* [Infragram Webcam](https://www.adafruit.com/products/1722) - visible and infrared

#Arduino
Flash [sunduino.ino](https://github.com/digitalvapor/terrarium/blob/master/sunduino/sunduino.ino) to your Arduino. Unplug from the rPi while doing so.

Serial output.

```
luminosity,humidity,temperature,heatindex
739.00,50.60,23.50,74.30,77.37
738.00,50.60,23.60,74.48,77.43
```

#Raspberry Pi

#Setup
See [sunduino.fzz](https://github.com/digitalvapor/terrarium/blob/master/sunduino.fzz) (made in [Fritzing](http://fritzing.org), `sudo apt-get install fritzing`)

![breadboard](https://github.com/digitalvapor/terrarium/blob/master/images/sunduino_breadboard.png "Sunduino connections")

Be sure to use a level converter or the above voltage divider between the Arduino and the Raspberry Pi.

##Download and contribute
Please fork, contribute and comment!

1. `git clone https://github.com/digitalvapor/terrarium.git`
2. `cd terrarium`
3. `ipython notebook`

#License
The default license is [Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/). All images in `images` folder are [Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
