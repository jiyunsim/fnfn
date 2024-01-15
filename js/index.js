$(function () {
  var swiper = new Swiper(".mainSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$(function () {
  var swiper = new Swiper(".bestSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, },
      loop : false,// 슬라이드 반복 여부
      loopAdditionalSlides : 3,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
  });
});

$(function () {
  var swiper = new Swiper(".reviewSwiper ", {
    slidesPerView: 4,
    spaceBetween: 30,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false, },
      loop : true,// 슬라이드 반복 여부
      loopAdditionalSlides : 3,
      navigation: {
        nextEl: ".rvswiper-button-next",
        prevEl: ".rv`swiper-button-prev",
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
  });
});