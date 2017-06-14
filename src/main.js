import PlantCollection from './plant_collection';
import TaxonomicTree from './taxonomic_tree';
import rawTaxonomyData from './taxonomy';
import rawPlantData from './plants.json';

// based on the plants i have in my collection that are _alive_, build the base PlantCollection.
const plantCollection = new PlantCollection(rawPlantData);

// this first builds from the data we already have
const taxonomyTree = new TaxonomicTree(rawTaxonomyData);

console.log(plantCollection, taxonomyTree);
