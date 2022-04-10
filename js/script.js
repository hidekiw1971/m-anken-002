jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // swiper
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });
});
