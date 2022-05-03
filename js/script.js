jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  const swiper = new Swiper(".swiper.works__mySwiper", {
    autoplay: {
      delay: 5000,
    },
  });
});
