#Terrarium Notebook
A new terrarium for carnivorous plants.

We'll be thoroughly documenting this project with a physical lab notebook, supplemented with IPython [Notebooks](http://nbviewer.ipython.org/github/digitalvapor/terrarium/tree/master/), and light/humidity/temperature sensors attached to a Raspberry Pi.

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
* [TSL2561](https://www.adafruit.com/products/439) ([datasheet](https://www.adafruit.com/datasheets/TSL256x.pdf)) - luminosity, 0.1 to 40,000 Lux
* [CdS photoresistor](https://www.adafruit.com/products/161) ([datasheet 1](https://learn.adafruit.com/system/assets/assets/000/010/127/original/PDV-P8001.pdf), [datasheet 2](https://learn.adafruit.com/system/assets/assets/000/010/128/original/DTS_A9950_A7060_B9060.pdf)) - ~5-200KΩ
* [Infragram Webcam](https://www.adafruit.com/products/1722) - visible and infrared

#Etc
* [W5200 Ethernet Shield](http://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html) ([library](https://github.com/Seeed-Studio/Ethernet_Shield_W5200), [wiki](http://www.seeedstudio.com/wiki/Ethernet_Shield_V2.4)) - v2.2 02/28/2014 10A14 by Seeed Studio
* [YSD-439AB4B-35 7-Segment](https://www.sparkfun.com/products/9481) ([datasheet](http://www.sparkfun.com/datasheets/Components/LED/7-Segment/YSD-439AB4B-35.pdf))

#Arduino
Flash [sunduino.ino](https://github.com/digitalvapor/terrarium/blob/master/sunduino/sunduino.ino) to your Arduino. Unplug from the rPi while doing so.

Serial output.

```
luminosity,ir,full,visible,lux,humidity,temperature,heatindex
917.00,275,882,607.00,468.00,54.20,23.70,74.66,77.41
917.00,275,883,608.00,469.00,53.90,23.80,74.84,77.50
917.00,276,885,609.00,470.00,53.80,23.80,74.84,77.50
918.00,276,885,609.00,470.00,53.70,23.80,74.84,77.50
917.00,276,886,610.00,471.00,53.60,23.80,74.84,77.51
912.00,94,266,172.00,124.00,53.50,23.80,74.84,77.51
912.00,92,260,168.00,121.00,53.50,23.90,75.02,77.59
912.00,93,263,170.00,122.00,53.50,23.90,75.02,77.59
911.00,109,307,198.00,142.00,53.50,23.90,75.02,77.59
910.00,128,377,249.00,184.00,53.60,23.90,75.02,77.59
910.00,153,457,304.00,226.00,53.70,23.90,75.02,77.58
910.00,161,483,322.00,240.00,53.60,24.00,75.20,77.67
918.00,275,882,607.00,468.00,53.50,24.00,75.20,77.67
917.00,272,873,601.00,464.00,53.40,24.00,75.20,77.67
917.00,271,870,599.00,462.00,53.30,24.00,75.20,77.67
```

#Raspberry Pi
(coming soon)

#The App
When you load the plant data, an ajax call is made to the `plants.json` file. This data is then parsed to a table. The humidity and temperature parameters are then used to calculate the lower and upper bounds that would make it so that all the plants can live in harmony. There is one dummy plant for general parameters that may not belong to a single species.

Currently it only plots temperature, humidity and luminosity, but it will be extended to plot ir, full, visible, lux, and heatindex as well. It already serially logs this data. The app utilizes [Highcharts](http://www.highcharts.com/). You can see a live version of this at [digitalvapor.github.io/terrarium](https://digitalvapor.github.io/terrarium). This was put together very fast and is still in the development stage. Please view with Chrome for the moment. I will massage any inconsistencies out soon. Feel free to report any bugs in the [issue tracker](https://github.com/digitalvapor/terrarium/issues).

##Dependencies
You can install the app dependencies for a local server with `npm install`, then `node server.js`. You can also run `grunt` to compile the coffee-script and run the server.

#Setup
See [sunduino.fzz](https://github.com/digitalvapor/terrarium/blob/master/sunduino.fzz) (made in [Fritzing](http://fritzing.org), `sudo apt-get install fritzing`)

![breadboard](https://github.com/digitalvapor/terrarium/blob/master/images/sunduino_breadboard.png "Sunduino connections")

Be sure to use a level converter or the above voltage divider between the Arduino and the Raspberry Pi.

##Download and contribute
Please fork, contribute and comment!

If you want the Arduino libraries I use in this project, be sure to add the `--recursive` flag to recursively clone these submodules.

1. `git clone --recursive https://github.com/digitalvapor/terrarium.git`
2. `cd terrarium`
3. `grunt` will run an Express server on port `3000`.
4. For terrarium notebooks, `cd notebook` and then `ipython notebook`.

#License
All images in `images` folder are [Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/). The license for everything else is [Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).
