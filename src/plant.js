import Organism from './organism';
import plantSchema from './schemas';
import validate from 'validate.js';

// TODO: move validation options elsewhere, such as with schema..
validate.options = {
  format: 'flat'
};

validate.extend(validate.validators.datetime, {
  parse: function(value, options) {
    // console.log(value, options)
    // return +moment.utc(value);
  },
  format: function(value, options) {
    // return moment.utc(value).format('YYYY-MM-DD hh:mm:ss');
  }
})

// until array validation gets added to validate.js can make our own generic validator.
validate.validators.arrayValidator = function(value, options) {
  if (!Array.isArray(value))
    return 'must be an array';

  value.forEach(function(obj) {
    validate(obj, options);
  });
};

class Plant extends Organism {
  constructor(plantInfo) {
    super(plantInfo);

    const validationErrors = validate(plantInfo, plantSchema);

    if (validationErrors)
      throw new Error(`Unexpected schema for plant (id: ${this.id}). ${validationErrors.join('. ')}.`);
  }

  // after the taxonomic tree is build, set the nearest taxonomic link. Invoked in main.js atm. At worst case scenario will use the general parameters.
  set taxonomicLink(linkingId) {
    // TODO: can add some sort of validation here
    this._taxonomicLink = linkingId;
  }

  get taxonomicLink() {
    return this._taxonomicLink;
  }
}

export default Plant;
