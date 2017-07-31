var values = {};

$( document ).ready(function() {
  $( "#submit" ).click(function(event) {
    event.preventDefault();

    $.each($('#abcd-form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    var patientScore = abcd2risk(parseInt(values.age,10), parseInt(values.systolicBP, 10), parseInt(values.diastolicBP, 10), values.clinicalFeatures, parseInt(values.duration, 10), values.diabetes)
    console.log(patientScore)

    $("#patientScore").text(patientScore)

});

    $("input").change(function() {
      console.log("changed")
   //  $("#abcd-form").submit()
      $.each($('#abcd-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
      });

      var patientScore = abcd2risk(parseInt(values.age,10), parseInt(values.systolicBP, 10), parseInt(values.diastolicBP, 10), values.clinicalFeatures, parseInt(values.duration, 10), values.diabetes)
      console.log(patientScore)

      $("#patientScore").text(patientScore)

});

})
