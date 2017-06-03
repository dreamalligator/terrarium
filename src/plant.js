import Organism from './organism';
import plantSchema from './plant_schema';
import validate from 'validate.js';
validate.options = {
  format: 'flat' // TODO: temp, just for debugging atm.
};

class Plant extends Organism {
  constructor(plantInfo) {
    super(plantInfo);

    this.validationErrors = validate(plantInfo, plantSchema);

    if (this.validationErrors)
      throw new Error(`unexpected schema for plant (id: ${this.id}). ${this.validationErrors.join('. ')}.`);
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
