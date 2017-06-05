const assert = require('assert');
import Plant from 'plant';

describe('Plant', function() {
  describe('#formattedTemperature()', function() {
    it('should return an empty string if no temperature environmental params', function() {
      const testPlant = new Plant();
      assert.equal(testPlant.formattedTemperature(), '');
    });
  });
});
