var values = {};

$( document ).ready(function() {
  $( "#submit" ).click(function(event) {
    event.preventDefault();

    $.each($('#abcd-form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    console.log( "You clicked submit!" );
    console.log(values)
});
})
