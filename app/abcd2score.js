function abcd2risk(age, systolic, diastolic) {
  return ageScore(age) + bpScore(systolic, diastolic);
}

function ageScore(age) {
  if (age >= 60){
    return 1;
  } else {
    return 0;
  }
}

function bpScore(systolic, diastolic) {
  if (systolic >= 140 || diastolic >= 90) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = abcd2risk
