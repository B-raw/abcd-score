var values = {};

$( document ).ready(function() {
  $( "#submit" ).click(function(event) {
    event.preventDefault();

    $.each($('#abcd-form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    console.log( "You clicked submit!" );
    console.log(values)
    debugger
    console.log(abcd2risk(parseInt(values.age,10), parseInt(values.systolicBP, 10), parseInt(values.diastolicBP, 10), parseInt(values.duration, 10), values.clinicalFeatures, values.diabetes))
});
})
