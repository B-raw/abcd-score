function abcd2risk(age) {
  return ageScore(age);
}

function ageScore(age) {
  if (age >= 60){
    return 1;
  } else {
    return 0
  }
}

module.exports = abcd2risk
