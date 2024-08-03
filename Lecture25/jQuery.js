/* jQuery */

/* Syntax Document Object Model(DOM of jQuery) */

/* first */

// $(document).ready(function(){
//   $('#btn1').click(function(){
//     $('#firstHeading').hide()
//   })
// })

// $(document).ready(function(){
//   $('#btn2').click(function(){
//     $('#firstHeading').show()
//   })
// })

/* second */

// $(function(){
//   $('#btn1').click(function(){
//     $('#firstHeading').hide()
//   })
// })

// $(function(){
//   $('#btn2').click(function(){
//     $('#firstHeading').show()
//   })
// })
// $(function(){
//   $('#btn3').click(function(){
//     $('#firstHeading').toggle()
//   })
// })

/* Fade Effect */

/*  FadeIn , FadeOut , FadeToggle */

// $(function(){
//   $('#fadeIn').click(function(){
//     $('#div-1').fadeIn()
//     $('#div-2').fadeIn('slow')
//     $('#div-3').fadeIn(3000)
//     $('#div-4').fadeIn(5000)
//     $('#div-5').fadeIn(7000)
//     $('#div-6').fadeIn(8000)
//   })
// })

// $(function(){
//   $('#fadeOut').click(function(){
//     $('#div-1').fadeOut()
//     $('#div-2').fadeOut('slow')
//     $('#div-3').fadeOut(3000)
//     $('#div-4').fadeOut(5000)
//     $('#div-5').fadeOut(7000)
//     $('#div-6').fadeOut(8000)
//   })
// })

// $(function(){
//   $('#fadeToggle').click(function(){
//     $('#div-1').fadeToggle()
//     $('#div-2').fadeToggle('slow')
//     $('#div-3').fadeToggle(3000)
//     $('#div-4').fadeToggle(5000)
//     $('#div-5').fadeToggle(7000)
//     $('#div-6').fadeToggle(8000)
//   })
// })

// $(function(){
//   $('#fadeTo').click(function(){
//     $('#div-1').fadeTo()
//     $('#div-2').fadeTo('slow' , 0.2)
//     $('#div-3').fadeTo(3000  , 0.4)
//     $('#div-4').fadeTo(5000 , 0.5)
//     $('#div-5').fadeTo(7000 , 0.7)
//     $('#div-6').fadeTo(8000  , 0.9)
//   })
// })

/* Slide Effect */

// $(function(){
//   $('#slide').click(function(){
//     $('#slide-content').slideDown(5000)
//   })
// })

// $(function(){
//   $('#slide').click(function(){
//     $('#slide-content').slideUp()
//   })
// })

$(function () {
  $("#slide").click(function () {
    $("#slide-content").slideToggle(2000);
    $("#slide-content").slideDown(3000);
    $("#slide-content").slideUp(4000);
  });
});
