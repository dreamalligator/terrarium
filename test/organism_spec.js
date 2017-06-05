const assert = require('assert');
import Organism from 'organism';

describe('Organism', function() {
  describe('#constructor()', function() {
    it('should be assumed to be alive', function() {
      const testOrganism = new Organism();
      assert.isTrue(testOrganism.alive);
    });
  });
});
