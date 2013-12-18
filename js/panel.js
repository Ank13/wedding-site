$(document).ready(function () {

  $('body').on('click', '#event-info', function(event) {
    event.preventDefault();
    var panel = $('#event-info-html').html()
    $('#info-panel').html(panel)
  });

  $('body').on('click', '#contact-us', function(event) {
    event.preventDefault();
    var panel = $('#contact-us-html').html()
    $('#info-panel').html(panel)
  });

  $('body').on('click', '#travel', function(event) {
    event.preventDefault();
    var panel = $('#travel-html').html()
    $('#info-panel').html(panel)
  });

  $('body').on('click', '#jewish-guide', function(event) {
    event.preventDefault();
    var panel = $('#jewish-guide-html').html()
    $('#info-panel').html(panel)
  });

  $('body').on('click', '#chicago', function(event) {
    event.preventDefault();
    var panel = $('#chicago-html').html()
    $('#info-panel').html(panel)
  });

  $('body').on('click', '#registry', function(event) {
    event.preventDefault();
    var panel = $('#registry-html').html()
    $('#info-panel').html(panel)
  });

  $('.coming_soon').on('click', function(event) {
    event.preventDefault();
    $('#info-panel').html("<h1>Coming Soon!</h1><a class='close' href='#'>Close</a>")
  });

  $('body').on('click', '.close', function(event) {
    event.preventDefault();
    $('#info-panel').html("")
  });

});


