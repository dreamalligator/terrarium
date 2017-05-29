import Plant from './plant';

class PlantCollection {
  constructor(plantJSON) {
    this.plants = this.build(plantJSON);
  }

  build(plantJSON) {
    if (plantJSON === undefined)
      return [];

    const alivePlants = plantJSON.filter(function(plant) {
      return plant.isAlive === true;
    });

    return alivePlants.map(function(plant) {
      return new Plant(plant);
    });
  }

  get environmentalLimits() {
    return this.plants.map(function(plant) {
      console.log(plant);
    });
  }

  get humanizedEnvironmentalLimits() {
    return this.environmentalLimits.join(' - ');
  }
}

export default PlantCollection;
