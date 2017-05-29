import Organism from './organism';

class Plant extends Organism {
  constructor(plantInfo) {
    super(plantInfo);

    // would be nice to have something similar to Faker.js to validate a schema and automatically extend the options that are valid.
    console.log(plantInfo);
  }

  // after the taxonomic tree is build, set the nearest taxonomic link. At worst case scenario will use the general parameters.
  set taxonomicLink(taxonomicLink) {
    this._taxonomicLink = taxonomicLink;
  }
}

export default Plant;
