// Team 5 Project index js

jQuery(document).ready(function () {
  setInterval(function () {
    $('.slide_body').delay(1000);
    $('.slide_body').animate({ marginLeft: "-100%" });
    $('.slide_body').delay(2000);
    $('.slide_body').animate({ marginLeft: "-200%" });
    $('.slide_body').delay(2000);
    $('.slide_body').animate({ marginLeft: "-300%" });
    $('.slide_body').delay(2000);
    $('.slide_body').animate({ marginLeft: 0 });
    $('.slide_body').delay(1000);
  }, 3000);
});
