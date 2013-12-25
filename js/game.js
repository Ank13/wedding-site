$(document).ready(function () {

  $('.result').hide();

  // when click on correct answer
  $('body').on('click', '.y', function(event) {
    $(this).css('background-color', '#66FF33')
    $(this).parent().children('.result').show()
    var response = $(this).parent().children('.result').data('y')
    $(this).parent().children('.result').html(response)
  });

  // when click on incorrect answer
  $('body').on('click', '.n', function(event) {
    $(this).css('background-color', '#FF0033')
    $(this).parent().children('.result').show()
    $(this).parent().children('.result').html("Try again!")
  });

});
