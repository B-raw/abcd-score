var values = {};

$( document ).ready(function() {

  $("input").change(function() {
    $.each($('#abcd-form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    var patientScore = abcd2risk(parseInt(values.age,10), parseInt(values.systolicBP, 10), parseInt(values.diastolicBP, 10), values.clinicalFeatures, parseInt(values.duration, 10), values.diabetes)

    $("#patientScore").text(patientScore)

    changeRiskBoxes(patientScore)
  });

})

function changeRiskBoxes(patientScore) {
  if ( patientScore >= 6 ) {
    $("#lowRisk").css('display', 'none')
    $("#mediumRisk").css('display', 'none')
    $("#highRisk").css('display', 'inline-block')
  } else if (patientScore <= 3) {
    $("#lowRisk").css('display', 'inline-block')
    $("#mediumRisk").css('display', 'none')
    $("#highRisk").css('display', 'none')
  } else {
    $("#lowRisk").css('display', 'none')
    $("#mediumRisk").css('display', 'inline-block')
    $("#highRisk").css('display', 'none')
  }
}
