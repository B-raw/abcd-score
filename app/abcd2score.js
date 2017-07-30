function abcd2risk(age, systolic, diastolic, clinicalFeatures, durationOfSymptoms, diabetic) {
  return ageScore(age) + bpScore(systolic, diastolic) + clinicalScore(clinicalFeatures) + durationScore(durationOfSymptoms) + diabetes(diabetic);
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
    return 1;
  }
  if (clinicalFeatures === "Unilateral Weakness") {
    return 2;
  }
}

function durationScore(durationOfSymptoms) {
  if (durationOfSymptoms >= 60 ) {
    return 2;
  }
  else if (durationOfSymptoms >= 10 ) {
    return 1;
  }
  else {
    return 0;
  }
}

function diabetes(diabetic) {
  return diabetic == "true" ? 1:0
}
