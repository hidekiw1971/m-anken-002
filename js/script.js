jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // swiper
  // const swiper = new Swiper(".swiper", {
  const swiper = new Swiper("#test1", {
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });
});
