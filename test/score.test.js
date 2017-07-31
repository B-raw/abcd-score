var assert = chai.assert;

describe('abcd2riskcalc', function() {
  it('should calculate abcd2 risk for fit patient', function() {
    assert.equal(abcd2risk(25, 100, 50, "None", 5, "false"), 0);
  });

  it('should calculate 1 for abcd2 for age over 60', function() {
    assert.equal(abcd2risk(70, 100, 50, "None", 5, "false"), 1);
  });

  it('should calculate 2 for  abcd2 for hypertensive patient age over 60', function() {
    assert.equal(abcd2risk(70, 150, 100, "None", 5, "false"), 2);
  });

  it('should calculate 3 for abcd2 for hypertensive patient age over 60 with speech disturbance', function() {
    assert.equal(abcd2risk(70, 150, 100, "Speech Disturbance", 5, "false"), 3);
  });

  it('should calculate 4 for abcd2 for hypertensive patient age over 60 with unilateral weakness', function() {
    assert.equal(abcd2risk(70, 150, 100, "Unilateral Weakness", 5, "false"), 4);
  });

  it('should calculate 5 for abcd2 for hypertensive patient age over 60 with unilateral weakness and 45 min symptoms', function() {
    assert.equal(abcd2risk(70, 150, 100, "Unilateral Weakness", 45, "false"), 5);
  });

  it('should calculate 6 for abcd2 for hypertensive patient age over 60 with unilateral weakness and > 1 hour symptoms', function() {
    assert.equal(abcd2risk(70, 150, 100, "Unilateral Weakness", 65, "false"), 6);
  });

  it('should calculate 7 for abcd2 for hypertensive patient age over 60 with unilateral weakness and > 1 hour symptoms and diabetes', function() {
    assert.equal(abcd2risk(70, 150, 100, "Unilateral Weakness", 65, "true"), 7);
  });

  // We can have more its here
});
