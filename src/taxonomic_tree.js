import rawTaxonomy from 'taxonomy';

class TaxonomicTree {
  constructor() {
    this.lookup = this.buildLookup();
  }

  // a quick lookup hash based on linking taxonomic ids. These IDs are unique and are automatically generated. It is required that each living plant is assigned a corresponding ID.
  buildLookup() {
    // TODO: left off here, have to build the taxonomic tree before being able to look things up.
    return {};
  }

  // based on the lookup, try to find the closes applicable taxon. If none is found, the defafult parmeters ID is returned
  findClosestTaxonInfo(plantObject) {
    // search database IDs

    // search exact taxon name

    // search hybrid names

    return null; // general params default ID
  }
}
