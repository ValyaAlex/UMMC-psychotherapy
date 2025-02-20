
// question
new Accordion('.accordion');
let catalog = document.querySelector('.questions__list');
let question = catalog.querySelectorAll('.ac-trigger');

question.forEach(function (el) {
  el.addEventListener('click', function () {
    el.classList.toggle('ac-trigger--active');
  })
})