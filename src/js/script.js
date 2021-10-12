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


