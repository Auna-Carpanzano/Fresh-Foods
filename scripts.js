$(document).ready(function() {
  $(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
      $(".about").each(function(index) {
        $(this).delay((index++) * 500).fadeIn("slow");
      });
    }

    if ($(window).scrollTop() > 1900) {

    }
  });
});

