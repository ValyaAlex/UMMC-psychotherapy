let header = document.querySelector('.header');

window.addEventListener("scroll", trackScroll);

function trackScroll() {
  const scrolled = window.scrollY;
  const heroBanner = document.querySelector('.hero__banner')
  const coords = heroBanner.offsetHeight;
  if (scrolled > coords) {
    header.classList.add('header--active');
  } else {
    header.classList.remove('header--active');
  }
}