// raw data
import rawTaxonomyData from './taxonomy';
import rawPlantData from './plants.json';

// classes
import PlantCollection from './plant_collection';
import TaxonomicTree from './taxonomic_tree';

// dependencies
import ko from 'knockout';
window.ko = ko;
ko.options.useOnlyNativeEvents = true;

/** the primary terrarium app class */
class TerrariumApp {
  constructor() {
    // based on the plants i have in my collection that are _alive_, build the base PlantCollection.
    this.plantCollection = new PlantCollection(rawPlantData);

    // this first builds from the data we already have
    this.taxonomyTree = new TaxonomicTree(rawTaxonomyData);

    // placeholder plant for the add-plant inputs
    this.temporaryPlant = ko.observable({
      id: null,
      taxon: null,
    })
  }
}

ko.applyBindings(new TerrariumApp());
