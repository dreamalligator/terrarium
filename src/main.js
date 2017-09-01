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

/**
 * the primary terrarium app class
 * @class TerrariumApp
 */
class TerrariumApp {
  constructor() {
    // based on the plants i have in my collection that are _alive_, build the base PlantCollection.
    this.plantCollection = new PlantCollection(rawPlantData);
    console.log(this.plantCollection.plants[0]);
    // this first builds from the data we already have
    this.taxonomyTree = new TaxonomicTree(rawTaxonomyData);

    // TODO: move into PlantCollection?
    this.plantCollection.plants.forEach((plant) => {
      const taxonInfo = this.taxonomyTree.taxonInfoLookup()[plant.taxon]

      Object.assign(plant, taxonInfo);
    });
    console.log(this.plantCollection.plants[0]);

    // placeholder plant for the add-plant inputs
    this.temporaryPlant = ko.observable({
      id: null,
      taxon: null,
    });

    this.temporaryPlant.subscribe((newPlant) => {
      console.log(newPlant);
      // only suggest an id if nothing is already written
      if (newPlant.id !== null)
        return;

      this.temporaryPlant({
        id: this.suggestPlantId(newPlant.taxon),
        taxon: newPlant.taxon,
      })
    });
  }

  suggestPlantId(taxon) {
    const databaseId = this.taxonomyTree.getPreferredDatabaseId(taxon);
    const n = this.plantCollection.numberOfTaxon() - 1;
    const year = new Date().getFullYear();
    return `${databaseId}_${year}_${n}`;
  }
}

ko.applyBindings(new TerrariumApp());
