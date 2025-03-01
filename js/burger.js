let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");
let responsiveOverlay = document.querySelector(".responsive-overlay");
let headerBg = document.querySelector(".header");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  headerBg.classList.toggle("header-bg");
  menu.classList.toggle("nav--active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    headerBg.classList.remove("header-bg");
    menu.classList.remove("nav--active");
    document.body.classList.remove("stop-scroll");
  });
});

responsiveOverlay.addEventListener("click", (e) => {
  if (e.target == responsiveOverlay) {
    menu.classList.remove("nav--active");
    document.body.classList.remove("stop-scroll");
    burger.classList.remove("burger--active");
    headerBg.classList.remove("header-bg");
  }
});

