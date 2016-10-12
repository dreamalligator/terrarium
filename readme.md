# [Terrarium Notebook](https://github.com/digitalvapor/terrarium)
My collection of carnivorous plants. Plus sensors and cool things.

There are some Jupyter [Notebooks](http://nbviewer.ipython.org/github/digitalvapor/terrarium/tree/master/), light/humidity/temperature sensors (w Arduino and Rpi), and a web app.

![sensor stream example](https://i.imgur.com/g2Lftvs.png)

## Example

See the example site and docs at [antivapor.net/terrarium](https://antivapor.net/terrarium).

## Plants

I used to list my individual plants here, but I'm even more organized now! you can just visit the [site](https://antivapor.net/terrarium), or less consumably, the [taxonomy](https://github.com/digitalvapor/terrarium/blob/master/javascripts/taxonomy.coffee) and [plant](https://github.com/digitalvapor/terrarium/blob/master/javascripts/plants.json) files to see all the info. There you'll hopefully find some cool data on drosera, nepenthes, cephalotus, utricularia, pinguicula, and sarracenia. Particularly check out the environmental parameters.

# The App
You can see a live version of this at [antivapor.net/terrarium](https://antivapor.net/terrarium).

The humidity and temperature parameters are used to calculate the lower and upper bounds that would make it so that all the plants can live in harmony. There is one dummy plant for general parameters that may not belong to a single species.

Currently it only plots temperature, humidity and luminosity, but it will be extended to plot ir, full, visible, lux, and heatindex as well. It already serially logs this data.

The app utilizes [Backbone](http://backbonejs.org/) and [D3](https://d3js.org/). Backbone no longer has a hard dependency on jQuery for DOM manipulation and such, so I opted to [substitute with native javascript](https://github.com/jashkenas/backbone/wiki/Using-Backbone-without-jQuery). See [`Backbone.NativeView`](https://github.com/akre54/Backbone.NativeView) and [`Backbone.NativeAjax`](https://github.com/akre54/Backbone.NativeAjax). Additionally, [`Backbone.dualStorage`](https://github.com/nilbus/Backbone.dualStorage) provides 2/4 of my [issue #3](https://github.com/digitalvapor/terrarium/issues/3) database to-do items which is cool.

Feel free to report any bugs in the [issue tracker](https://github.com/digitalvapor/terrarium/issues).

## Dependencies
You can install the majority of the app dependencies with `npm install`. The only Ruby dependency is Sass; run `gem install sass`.

### Notebook related
`pip3 install jupyter` to install Jupyter, but see Jupyter [docs on installation](https://jupyter.readthedocs.org/en/latest/install.html) for notebook-related dependencies, because you'll probably have to run stuff like `apt-get install build-essential python3-dev`. And Python 3+ I think is good, but as an FYI, I am running Python 3.5.0 and Ruby 2.2.3.

## Development and running the server
The only command needed is `grunt`. This will compile everything and run the server. For each separate command, please see the [`Gruntfile`](https://github.com/digitalvapor/terrarium/blob/master/Gruntfile.js).

# Hardware Setup
See [sunduino.fzz](https://github.com/digitalvapor/terrarium/blob/master/sunduino.fzz) (made in [Fritzing](http://fritzing.org), `sudo apt-get install fritzing`)

![breadboard](https://github.com/digitalvapor/terrarium/blob/master/images/sunduino_breadboard.png "Sunduino connections")

Be sure to use a level converter or the above voltage divider between the Arduino and the Raspberry Pi.

## Arduino
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

## Sensors
* [DHT22](http://www.adafruit.com/products/385) ([datasheet](https://www.adafruit.com/datasheets/DHT22.pdf)) - temperature and humidity, humidity 0-100%RH, temperature -40 - 125°C, **NOTE: avoid dew warning**
* [TSL2561](https://www.adafruit.com/products/439) ([datasheet](https://www.adafruit.com/datasheets/TSL256x.pdf)) - luminosity, 0.1 to 40,000 Lux
* [CdS photoresistor](https://www.adafruit.com/products/161) ([datasheet 1](https://learn.adafruit.com/system/assets/assets/000/010/127/original/PDV-P8001.pdf), [datasheet 2](https://learn.adafruit.com/system/assets/assets/000/010/128/original/DTS_A9950_A7060_B9060.pdf)) - ~5-200KΩ
* [Infragram Webcam](https://www.adafruit.com/products/1722) - visible and infrared

# Etc
* [W5200 Ethernet Shield](http://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html) ([library](https://github.com/Seeed-Studio/Ethernet_Shield_W5200), [wiki](http://www.seeedstudio.com/wiki/Ethernet_Shield_V2.4)) - v2.2 02/28/2014 10A14 by Seeed Studio
* [YSD-439AB4B-35 7-Segment](https://www.sparkfun.com/products/9481) ([datasheet](http://www.sparkfun.com/datasheets/Components/LED/7-Segment/YSD-439AB4B-35.pdf))

## Download and contribute
Please fork, contribute and comment!

If you want the Arduino libraries I use in this project, be sure to add the `--recursive` flag to recursively clone these submodules.

1. `git clone --recursive git@github.com:digitalvapor/terrarium.git`
2. `cd terrarium`
3. `npm install`
4. `grunt` will run an Express server on port `3000`. It will also automatically compile assets. Because this project is still in the alpha phase, it is assumed you are a savvy hacker and know what all this means.
5. For terrarium notebooks, `cd notebook` and then `jupyter notebook`.

# License
All images in `images` folder are [Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/). The license for everything else is [Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).
