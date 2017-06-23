export default class TaxonomicTree {
  constructor(rawTaxonomyData) {
    this._rawData = rawTaxonomyData;
  }

  /**
   * @return {object[]} all of the raw plant species data
   */
  get rawData() {
    return this._rawData;
  }

  /**
   * NOTE: this doesn't account for changes in the raw data. Will have to restart app atm to get changes.
   * @return {string[]} a sorted list of the taxonomic names that we already have data for.
   */
  validTaxons() {
    if (this._validTaxonNames)
      return this._validTaxonNames;

    this._validTaxonNames = this.rawData.map(function(plant) { return plant.taxon; }).sort();
    return this._validTaxonNames;
  }
}
