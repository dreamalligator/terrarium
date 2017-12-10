const assert = require('assert');
import Plant from 'plant';

describe('Plant', function() {
  let plant;

  beforeEach(function() {
    plant = new Plant();
  });

  describe('#formattedTemperature', function() {
    it('should return an empty string if no temperature environmental params', function() {
      assert.equal(plant.formattedTemperature(), '');
    });
  });

  context('#taxonomicLink', function() {
    it('should throw if not given a string', function() {
      expect(function() {
        plant.taxonimicLink = undefined;
      }).to.throw(TypeError);
    });

    it('should set the id if given string', function() {
      const id = 'abc';
      expect(function() {
        plant.taxonomicLink = id;
      }).to.not.throw;
      expect(plant.taxonomicLink).to.equal(id);
    });
  });
});
