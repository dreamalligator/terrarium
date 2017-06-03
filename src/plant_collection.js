import Plant from './plant';

class PlantCollection {
  constructor(plantJSON) {
    this.plants = this.build(plantJSON);
  }

  build(plantJSON) {
    if (plantJSON === undefined)
      return [];

    const alivePlants = plantJSON.filter(function(plant) {
      // TODO: haven't figured out how I wanna notate this yet.
      return plant.alive !== false;
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
