$(document).ready(function() {
  $(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
      fadeAbout();
    }

    if ($(window).scrollTop() > 1900) {
      fadeMenus();
    }

    function fadeAbout() {
      setTimeout(function() {
        $(".about-1").animate({"opacity": "1"}, 500);
      }, 500);

      setTimeout(function() {
        $(".about-2").animate({"opacity": "1"}, 500);
      }, 1000);

      setTimeout(function() {
        $(".about-3").animate({"opacity": "1"}, 500);
      }, 1500);
    }

    function fadeMenus() {
      setTimeout(function() {
        $(".menu-1").animate({"opacity": "1"}, 500);
      }, 500);

      setTimeout(function() {
        $(".menu-2").animate({"opacity": "1"}, 500);
      }, 1000);

      setTimeout(function() {
        $(".menu-3").animate({"opacity": "1"}, 500);
      }, 1500);
    }
  });
});

