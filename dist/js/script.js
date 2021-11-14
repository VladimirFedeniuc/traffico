var acc = document.getElementsByClassName("accordion-item__head");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_left.svg"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_right.svg"></button>'
  });
});


// Hamburger

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Validate form
function validateForms(form){
  $(form).validate({
    rules: {
      name: "required",
      email: "required"
    },
    messages: {
      name: "Please specify your name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });
};


validateForms('#4');
validateForms('#consultation form');
// $('.feed-form').validate({
//   rules: {
//     name: "required",
//     email: "required"
//   },
//   messages: {
//     name: "Please specify your name",
//     email: {
//       required: "We need your email address to contact you",
//       email: "Your email address must be in the format of name@domain.com"
//     }
//   }
// });

// Modal
$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks').fadeOut('slow');
});

// Wow.js - animate
new WOW().init();

// PHP mailer
$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consultation').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
});

// Page up
$(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
  } else {
      $('.pageup').fadeOut();
  }
});

$("a[href]").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});