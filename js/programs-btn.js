let programs = document.querySelector('.programs__cards');
let cards = programs.querySelectorAll('.programs__card');
let programsBtn = document.querySelector('.programs__btn');

if (cards.length > 3) {
    programsBtn.classList.add('programs__btn--active')
    programsBtn.classList.remove('programs__btn--disabled')
} else {
    programsBtn.classList.remove('programs__btn--active')
    programsBtn.classList.add('programs__btn--disabled')
}