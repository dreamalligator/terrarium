import PlantCollection from './plant_collection';
import TaxonomicTree from './taxonomic_tree';
import rawTaxonomyData from './taxonomy';
import rawPlantData from './plants.json';

// based on the plants i have in my collection that are _alive_, build the base PlantCollection.
const plantCollection = new PlantCollection(rawPlantData);
const taxonomyTree = new TaxonomicTree(rawTaxonomyData);

// probably will place this in plantCollection later
plantCollection.plants.forEach(function(plant) {
  const linkingId = taxonomyTree.findClosestTaxonInfo(plant);
  plant.taxonomicLink = linkingId;
});

console.log('plantCollection', plantCollection);
