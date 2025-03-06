let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");
let responsiveOverlay = document.querySelector(".responsive-overlay");
let headerBg = document.querySelector(".header");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  headerBg.classList.toggle("header-bg");  // добавляется класс к хедеру
  menu.classList.toggle("nav--active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    headerBg.classList.remove("header-bg"); // убирается класс у хедера
    menu.classList.remove("nav--active");
    document.body.classList.remove("stop-scroll");
  });
});

responsiveOverlay.addEventListener("click", (e) => { // в выложенной версии лендинга на данный момент меню не закрывается при нажатии на пустое поле
  if (e.target == responsiveOverlay) {
    menu.classList.remove("nav--active");
    document.body.classList.remove("stop-scroll");
    burger.classList.remove("burger--active");
    headerBg.classList.remove("header-bg");// убирается класс у хедера
  }
});

