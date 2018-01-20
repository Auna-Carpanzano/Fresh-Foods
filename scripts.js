$(document).ready(function() {
  $(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
      fadeAbout();
    }

    if ($(window).scrollTop() > 1900) {
      fadeMenus();
    }
  });
});
