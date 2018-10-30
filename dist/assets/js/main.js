(function hamburgerClick () {
  $(document).ready(function () {
    // hamburger manu script start
    $('.nav-icon').click(function (e) {
      e.preventDefault()
      $('.hamburger-menu-block').toggleClass('menu-open')
    })
    $('.sub-menu').click(function (e) {
      e.preventDefault()
      $('.sub-menu').removeClass('active')
      $(this).toggleClass('active')
    })
  })
  $('.dropdown-block .nav-link').click(function (e) {
    // e.preventDefault()
    e.stopPropagation()
    $('.hamburger-menu-block').removeClass('menu-open')
  })
}())
// hamburger manu script end
$(document).ready(function () {
  try {
      console.log('dgds' + $(window).width())
      if ($(window).width() < 765) {
        (function homeHeaderTextCarousel () {
          $('.saras-team-blocks').slick({
            slidesToShow: 1,
            slidesToScroll: 8,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            prevArrow: false,
            nextArrow: false,
            swipe: true,
            slide: '.saras-team-member-block'
          })
        }());
          }
      // chairman-awards-carousel start

  } catch (e) {
    console.log('Error', e)
  }
})
// (function(){
//   $('.blog-list').mouseenter(function(){
//       $(this).addClass('hover-blog');
//   })
//   $('.blog-list').mouseleave(function(){
//       $(this).removeClass('hover-blog');
//   })
// })();
(function () {
  var check = {
    empty: function (value) {
      return !value
    },

    invalid: function (value) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !re.test(value)
    }
  }

  var validations = {
    fName: ['empty'],
    email: ['empty', 'invalid'],
    message: ['empty']
  }
  // contact-form-submit start
  $('.en-conta-form').on('submit', function (e) {
    e.preventDefault()
    console.log('hello')
    var $form = $('.en-conta-form')
    var form = $form[0]

    var isReadyToSubmit = true

    for (var key in validations) {
      var value = form[key].value
      validations[key].some(function (x) {
        var bln = check[x](value)
        var $errorMessages = $(form[key]).parent().find('.error-messages')

        $errorMessages.find('[x-type]').removeClass('show')
        if (bln) {
          isReadyToSubmit = false

          $errorMessages.find('[x-type="' + x + '"]').addClass('show')
        }
        return bln
      })
    }

    if (isReadyToSubmit) {
      // if(true){
      // form.submit();
      $.ajax({
        type: 'POST',
        url: $form.attr('action'), // use the form's action attribute as the endpoint
        data: $form.serialize(), // use the data from the form
        headers:
        {
          'Accept': 'application/json' // this makes the server send you a JSON response
        },
        success: function (response) // handle the successful submission of your POST
        {
          console.log(response) // response contains the form submission that was just made
          // alert("Thank you for your submission, we'll get back to you soon :)");
          form.reset()// reset the form

        },
        complete: function (response) {
          form.reset()
        }
      })
    }
  })
  // contact-form-submit end
}())