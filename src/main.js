import PlantCollection from './plant_collection';
// import TaxonomicTree from './taxonomic_tree';
// import rawTaxonomyData from './taxonomy';
import rawPlantData from './plants.json';
import ko from 'knockout';
window.ko = ko;
ko.options.useOnlyNativeEvents = true;

class TerrariumApp {
  constructor() {
    // based on the plants i have in my collection that are _alive_, build the base PlantCollection.
    this.plantCollection = new PlantCollection(rawPlantData);

    // this first builds from the data we already have
    // this.taxonomyTree = new TaxonomicTree(rawTaxonomyData);
  }
}

ko.applyBindings(new TerrariumApp());
