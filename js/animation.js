document.addEventListener("DOMContentLoaded", () => {
  let element = document.querySelectorAll(".about__list");

  const tl = gsap.timeline({ paused: true });

  let item1 = document.querySelector('.advantage-1');
  let item2 = document.querySelector('.advantage-2');
  let item3 = document.querySelector('.advantage-3');
  let item4 = document.querySelector('.advantage-4');
  let item5 = document.querySelector('.advantage-5');
  let item6 = document.querySelector('.advantage-6');
  let item7 = document.querySelector('.advantage-7');
  let item8 = document.querySelector('.advantage-8');
  let item9 = document.querySelector('.advantage-9');

  tl.from(item1, { duration: 1, opacity: 0, x: 200 })
    .from(item2, { duration: 1, opacity: 0, x: 200 }, "-=0.6")
    .from(item3, { duration: 1, opacity: 0, x: 200 }, "-=0.6")
    .from(item4, { duration: 1, opacity: 0, x: 200 }, "-=0.6")
    .from(item5, { duration: 1, opacity: 0, x: 200 }, "-=0.6")
    .from(item6, { duration: 1, opacity: 0, x: 200 }, "-=0.6")
    .from(item7, { duration: 1, opacity: 0, y: 200 }, "-=0.6")
    .from(item8, { duration: 1, opacity: 0, y: 200 }, "-=0.6")
    .from(item9, { duration: 1, opacity: 0, y: 200 }, "-=0.6")

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        tl.play();
      }
    });
  }

  let observer = new IntersectionObserver(onEntry, { threshold: 0.3 });
  for (let elm of element) {
    observer.observe(elm);
  }
});
