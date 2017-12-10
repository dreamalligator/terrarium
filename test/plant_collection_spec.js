import PlantCollection from 'plant_collection';

const numSamplePlans = 3;
const samplePlant = {
  alive: true,
};
const sampleJSON = ko.toJSON((new Array(numSamplePlans)).fill(samplePlant));

describe('PlantCollection', function() {
  let plantCollection;

  context('#constructor', function() {
    it('with no params', function() {
      plantCollection = new PlantCollection();
      expect(plantCollection.build.calledOnce).to.be.true;
      expect(plantCollection.sortedPlants()).to.have.lengthof(0);
    });

    it('with some params', function() {
      plantCollection = new PlantCollection(sampleJSON);
      expect(plantCollection.build.calledOnce).to.be.true;
      expect(plantCollection.sortedPlants()).to.have.lengthof(numSamplePlans);
    });
  });
});
