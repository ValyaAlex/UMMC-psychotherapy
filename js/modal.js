const heroCard = document.querySelectorAll('.modal-card');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const closedSpecialist = document.querySelectorAll('.modal__btn-close');

heroCard.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.toggle('modal-overlay--visible');
    document.body.classList.toggle('stop-scroll');
    modalOverlay.scrollTop = 0;
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll');
    });
  };
});

closedSpecialist.forEach(function (el) {
  el.addEventListener('click', function () {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((elem) => {
      elem.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll');
    });
  });
})

