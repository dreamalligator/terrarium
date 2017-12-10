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

    this.tableSorting = ko.observable({
      key: 'taxon',
      ascending: true,
    });

    this.sortedPlants = ko.computed(() => {
      const sorting = this.tableSorting();
      const plants = this.plants; // dont feel like mutating the original

      if (sorting.key === undefined)
        return plants;

      plants.sort(function(plant1, plant2) {
        if (sorting.ascending)
          return plant1[sorting.key] > plant2[sorting.key];
        else
          return plant1[sorting.key] < plant2[sorting.key];
      });

      return plants;
    });

    console.log(`${this.uniqueTaxonomicLinks.size} ids have already been assigned. ${this.uniqueRemainingTaxons.size} taxons need to be paired.`);
  }

  /**
   * @param {JSON} [plantJSON] plant data
   * @return {Plant[]} all of the alive plants
   */
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

  /**
   * @example
   *
   *   this.sortBy('id')
   *
   * @param {String} [key] key to sort by
   * @return {void}
   */
  sortBy(key) {
    const sorting = this.tableSorting();
    const ascending = (sorting.key === key) ? !sorting.ascending : true;

    this.tableSorting({
      ascending: ascending,
      key: key,
    });
  }

  /**
   * @param {String} [taxon] taxon name
   * @return {Number} number of taxon
   */
  numberOfTaxon(taxon) {
    console.log(this.plants, taxon);
    return 0;
  }
}

export default PlantCollection;
