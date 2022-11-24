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
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
// 모레의 뉴스
new Swiper('.swiper2', {
  // Optional parameters
  loop: true,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});
new Swiper('.swiper3', {
  // Optional parameters
  loop: true,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  spaceBetween: 30,
        centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  }
});