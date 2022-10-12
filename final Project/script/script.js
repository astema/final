const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
 });

 let key = document.querySelector('.posts'); 
 key.addEventListener('click', () => {
  key.removeChild()
 }) 
