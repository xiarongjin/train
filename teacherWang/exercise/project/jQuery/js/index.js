$(function () {
    console.log(123)
  })
 $(function () { 
    $('#section1').attr('class',123)
  })
$(function () {
   console.log( $('p').length);
   $('#section1').nextUntil('i').css('color', 'red');
  //  $('#section1').nextAll('p').css('color', 'red');
  //  $('#section1').prevAll('i').css('color', 'red');
  $('.down').click(function () {
    $('#section1').slideDown('slow');
  });
  $('.up').click(function () {
    $('#section1').slideUp('slow');
  });
  $('.toggle').click(function () {
    $('#section1').fadeToggle();
  });
  
 
  })
