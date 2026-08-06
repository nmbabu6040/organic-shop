// swipper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true, // এটি দিলে একটি স্লাইড আবছা হয়ে মিলিয়ে যাওয়ার সাথে সাথে অন্যটি দৃশ্যমান হবে
  },
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
