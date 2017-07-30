function abcd2risk(age, systolic, diastolic, clinicalFeatures) {
  return ageScore(age) + bpScore(systolic, diastolic) + clinicalScore(clinicalFeatures);
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

function clinicalScore(clinicalFeatures) {
  if (clinicalFeatures === "None") {
    return 0;
  }
  if (clinicalFeatures === "Speech Disturbance") {
      return 1
  }
  if (clinicalFeatures === "Unilateral Weakness") {
    return 2
  }
}

module.exports = abcd2risk
