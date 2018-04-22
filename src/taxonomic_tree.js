export default class TaxonomicTree {
  constructor(rawTaxonomyData) {
    this._rawData = rawTaxonomyData;
  }

  /**
   * @return {Object[]} all of the raw plant species data
   */
  get rawData() {
    return this._rawData;
  }

  taxonomyInfo(taxon) {
    return this.rawData.find(function(plant) { return plant.taxon === taxon; });
  }

  /**
   * NOTE: this doesn't account for changes in the raw data. Will have to restart app atm to get changes.
   * @return {String[]} a sorted list of the taxonomic names that we already have data for.
   */
  validTaxons() {
    if (this._validTaxonNames)
      return this._validTaxonNames;

    this._validTaxonNames = this.rawData.map(function(plant) { return plant.taxon; }).sort();
    return this._validTaxonNames;
  }

  /**
   * Based on the preferred order of database ids, choose the first based on taxonomic name
   * @param {String} taxon taxon
   * @return {String} database id
   */
  getPreferredDatabaseId(taxon) {
    const dbIds = this.taxonomyInfo(taxon).databases;
    console.log('dbIds', dbIds);
    // TODO: sort by preferred
  }

  /**
   * @param {String} taxon taxon
   * @return {Object} info
   */
  taxonInfoLookup(taxon) {
    if (this._lookupByTaxon === undefined)
      this._lookupByTaxon = {}; // raw data grouped by taxon
    return this._lookupByTaxon[taxon];
  }
}
