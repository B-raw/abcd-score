var chai = require('chai');
var assert = chai.assert;
var scotheart = require('../app/scotheart.js')
var cadRisk = scotheart.CADRisk

describe('CADRisk', function() {
  it('should calculate cadRisk for our default value', function() {
    assert.equal(cadRisk(50, "female", "non-angina", 5), 5.7);
  });

  it('should calculate cadRisk based on different age provided', function() {
    assert.equal(cadRisk(24, "female", "non-angina", 5), 2.17);
  });

  it('should calculate cadRisk based on different sex provided', function() {
    assert.equal(cadRisk(50, "male", "non-angina", 5), 18.77);
  });

  it('should calculate cadRisk based on over 85', function() {
    assert.equal(cadRisk(86, "male", "non-angina", 5), 48.37);
  });

  it('should calculate cadRisk based on different angina grade provided', function() {
    assert.equal(cadRisk(50, "male", "typical", 5), 60.94);
  });

  it('should calculate cadRisk based on different angina grade provided', function() {
    assert.equal(cadRisk(50, "male", "atypical", 5), 30.47);
  });

  it('should calculate cadRisk based on troponin over 7', function() {
    assert.equal(cadRisk(50, "male", "non-angina", 9), 45.46);
  });

  // We can have more its here
});
