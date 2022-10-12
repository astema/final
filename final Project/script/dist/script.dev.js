"use strict";

var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  } // And if we need scrollbar

});
var key = document.querySelector('.posts');
key.addEventListener('click', function () {
  key.removeChild();
});
//# sourceMappingURL=script.dev.js.map
