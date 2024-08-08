/*
 * @Author: your name
 * @Date: 2021-01-10 14:16:03
 * @LastEditTime: 2021-02-03 10:47:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wechat_demoe:\Z_projects\G_others\ht-echo.github.io\themes\butterfly\source\js\swiper_init.js
 */
var swiper = new Swiper('.blog-slider', {
  passiveListeners: true,
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: {
    disableOnInteraction: true,
    delay: 3000
  },
  mousewheel: false,
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

var comtainer = document.getElementById('swiper_container');
comtainer.onmouseenter = function() {
  swiper.autoplay.stop();
};
comtainer.onmouseleave = function() {
  swiper.autoplay.start();
}
