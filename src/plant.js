import Organism from './organism';
import plantSchema from './schemas';
import validate from 'validate.js';

// TODO: move validation options elsewhere, such as with schema..
validate.options = {
  format: 'flat'
};

validate.extend(validate.validators.datetime, {
  parse: function(value, _options) {
    const parsedValue = Date.parse(value);
    if (isNaN(parsedValue))
      throw new Error(`invalid date format found: ${value}`);

    return parsedValue;
  },
  format: function(value, _options) {
    return value;
  }
});

// until array validation gets added to validate.js can make our own generic validator.
validate.validators.arrayValidator = function(value, options) {
  if (!Array.isArray(value))
    return 'must be an array';

  value.forEach(function(obj) {
    validate(obj, options);
  });
};

// if an object exists it should only have these keys
validate.validators.keyValidator = function(value, options, key, attributes) {
  options.forEach(function(requiredKey) {
    if (attributes[key] && attributes[key][requiredKey] === undefined)
      throw new Error(`required key '${requiredKey}' not present`);
  })
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
