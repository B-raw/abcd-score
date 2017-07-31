var values = {};

$( document ).ready(function() {

  $("input").change(function() {
    $.each($('#abcd-form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    var patientScore = abcd2risk(parseInt(values.age,10), parseInt(values.systolicBP, 10), parseInt(values.diastolicBP, 10), values.clinicalFeatures, parseInt(values.duration, 10), values.diabetes)
    console.log(patientScore)

    $("#patientScore").text(patientScore)
  });

})
