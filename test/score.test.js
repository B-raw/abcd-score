var chai = require('chai');
var assert = chai.assert;
var abcd2risk = require('../app/abcd2score.js')

describe('abcd2riskcalc', function() {
  it('should calculate abcd2 risk for fit patient', function() {
    assert.equal(abcd2risk(25, 100, 50, "None", 5, false), 0);
  });

  it('should calculate abcd2 for age over 60', function() {
    assert.equal(abcd2risk(70, 100, 50, "None", 5, false), 1);
  });

  it('should calculate abcd2 for hypertensive patient age over 60', function() {
    assert.equal(abcd2risk(70, 150, 100, "None", 5, false), 2);
  });

  // We can have more its here
});
