import Organism from './organism';
import plantSchema from './plant_schema';
import validate from 'validate.js';

class Plant extends Organism {
  constructor(plantInfo) {
    if (!validate(plantInfo, plantSchema))
      throw new Error('not valid???');

    super(plantInfo);

    // would be nice to have something similar to Faker.js to validate a schema and automatically extend the options that are valid.
    console.log(plantInfo);
  }

  // after the taxonomic tree is build, set the nearest taxonomic link. Invoked in main.js atm. At worst case scenario will use the general parameters.
  set taxonomicLink(linkingId) {
    this._taxonomicLink = linkingId;
  }

  get taxonomicLink() {
    return this._taxonomicLink;
  }
}

export default Plant;
