class TaxonomicTree {
  constructor(rawTaxonomyData) {
    this._rawData = rawTaxonomyData;
    this.floatingTrees = this.buildFloatingTrees();

    console.log(`${this.floatingTrees.length} trees produced.`);
  }

  get rawData() {
    return this._rawData;
  }

  /**
   * This uses the data we already have available to build floating trees
   * @param {object} rawTaxonomyData the raw data saved
   * @return {object[]} the processed trees
   */
  buildFloatingTrees() {
    const unsortedPlants = this.rawData;

    unsortedPlants.forEach(function(plant) {
      console.log('do something with this plant', plant);
    });
  }
}

export default TaxonomicTree;
