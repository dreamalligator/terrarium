const _ = require('underscore');
var Backbone = require('backbone');

Backbone.ajax = require('backbone.nativeajax');
Backbone.View = require('backbone.nativeview');

import rawTaxonomy from './taxonomy';
import './plot';
import { version, name } from '../package.json';

class Plant extends Backbone.Model {
  constructor() {
    super();
    this.defaults = {
      alive: true,
      carnivorous: true,
      owner: 'tom'
    }
  }

  initialize() {
    _.extend(this, this.attributes);
    return this.addEnvironmentalParameters();
  }

  addEnvironmentalParameters() {
    let foundParams = _.find(rawTaxonomy, function(plantAttributes) {
      return plantAttributes.taxon === plantAttributes.taxon;
    });

    if (foundParams) {
      return _.extend(this, foundParams);
    }
  }

  formattedTemperature() {
    let ref, t;
    if (t = (ref = this.environment) != null ? ref.temperature : void 0) {
      return [t.ambient, t.soil, t.extremes].join(' ');
    } else {
      return '';
    }
  }

  formattedHumidity() {
    let ref;
    return ((ref = this.environment) != null ? ref.humidity : void 0) || '';
  }

  formattedLuminosity() {
    var ref;
    return ((ref = this.environment) != null ? ref.luminosity : void 0) || '';
  }

}

class PlantCollection extends Backbone.Collection {
  constructor() {
    super();

    return {
      model: Plant,
      url: './javascripts/plants.json'
    }
  }
}

class PlantListView extends Backbone.View {
  constructor() {
    super();
    return {
      el: '#plant-container',
      events: {
        'click .update': 'updatePlant',
        'click .create': 'createPlant',
        'click .changes': 'viewUnsyncedChanges',
        'click .cancel': 'cancelUnsyncedChanges',
        'click .sync': 'syncPlants'
      },
      model: this.plantList.models,
      template: _.template(document.querySelector('#plant-collection-template').innerHTML),
    }
  }

  initialize() {
    return this.render();
  }

  render() {
    this.el.innerHTML = this.template({
      plants: this.model
    });
    return this;
  }

  updatePlant(_this) {
    return function(_event) {
      console.log('update', _this);
      return _this.defaultPlantListView.render();
    };
  }

  createPlant(_this) {
    return function(_event) {
      _this.plantList.add([
        {
          taxon: "new plant! edit me"
        }
      ]);
      return _this.defaultPlantListView.render();
    };
  }
}

/* eslint-disable no-unused-vars */
class PlantHistoryView extends Backbone.View {
  constructor() {
    super();
    return {
      el: "#plant-history-container",
      events: {
        'click .do-something': 'doSomething'
      },
      template: _.template(document.querySelector("#plant-history-template").innerHTML),
    }
  }

  initialize() {
    return 'yah history';
  }

  render() {
    return this.el.innerHTML = this.template({
      junk: 'yuh'
    });
  }

  doSomething() {
    return console.log('did something');
  }
}
/* eslint-enable no-unused-vars */

class AppRouter extends Backbone.Router {
  constructor() {
    super();
    this.routes = {
      '': 'list',
      'plant-info/:id': 'viewPlant'
    };
  }

  list(_this) {
    return function() {
      return _this.plantList.fetch({
        success: function() {
          _this.defaultPlantListView = new PlantListView();
          return _this.defaultPlantListView.render();
        }
      });
    };
  }

  viewPlant(_this) {
    return function() {};
  }
}

class Application {
  constructor() {
    new AppRouter();
    Backbone.history.start();
    console.log(`${name} version ${version}`);
  }
}

this.plantList = new PlantCollection();
this.plantList.on('add', function(plant) {
  return console.log("added plant: " + (plant != null ? plant.taxon : void 0));
});

document.addEventListener("DOMContentLoaded", function() {
  new Application();
});
