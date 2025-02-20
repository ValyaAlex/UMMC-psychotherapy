const goTopBtn = document.querySelector(".go-top");
let header = document.querySelector('.header');

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.scrollY;
  const heroBanner = document.querySelector('.hero__banner')
  const coords = heroBanner.offsetHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
    header.classList.add('header--active');
  } else {
    goTopBtn.classList.remove("go-top--show");
    header.classList.remove('header--active');
  }
}

function goTop() {
  if (window.scrollY > 0) {
    window.scroll(0, -window.innerHeight); 
  }
}