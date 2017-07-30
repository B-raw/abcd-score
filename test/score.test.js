var chai = require('chai');
var assert = chai.assert;
var scotheart = require('../app/scotheart.js')
var cadRisk = scotheart.CADRisk

describe('abcd2riskcalc', function() {
  it('should calculate abcd2 risk for fit patient', function() {
    assert.equal(abcd2risk(25, 100, 50, "None", 5, false), 0);
  });


  // We can have more its here
});
