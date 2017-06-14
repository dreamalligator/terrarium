import Plant from './plant';

class PlantCollection {
  constructor(plantJSON) {
    this.plants = this.build(plantJSON);

    this.uniqueTaxonomicLinks = new Set();
    this.uniqueRemainingTaxons = new Set();
    this.plants.forEach((plant) => {
      if (plant.taxonomicLink)
        this.uniqueTaxonomicLinks.add(plant.taxonomicLink);
      else
        this.uniqueRemainingTaxons.add(plant.taxon);
    });

    console.log(`${this.uniqueTaxonomicLinks.size} ids have already been assigned. ${this.uniqueRemainingTaxons.size} taxons need to be paired.`);
  }

  build(plantJSON) {
    if (plantJSON === undefined)
      return [];

    const alivePlants = plantJSON.filter(function(plant) {
      return plant.alive !== false;
    });

    return alivePlants.map(function(plant) {
      return new Plant(plant);
    });
  }


}

export default PlantCollection;
