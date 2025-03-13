const swiperBanner = new Swiper(".banner-swiper", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 2500,
  },
  allowTouchMove: false,
  pagination: false,
  navigation: false,
});

const swiperAbout = new Swiper(".about-swiper", {
  direction: "horizontal",
  loop: true,
  speed: 700,
  slidesPerView: 1.15,
  spaceBetween: 0,
  pagination: false,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      translate: [0, 0, -400],
      opacity: 0,
    },
    next: {
      translate: ["105%", 0, 0],
    },
    limitProgress: 3,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  breakpoints: {
    550: {
      slidesPerView: 1.9,
    },
    721: {
      slidesPerView: 3.3,
      spaceBetween: 5,
      centeredSlides: false,
    },

    1440: {
      slidesPerView: 2.7,
      spaceBetween: 25,
    },

    1700: {
      slidesPerView: 2.9,
      spaceBetween: 32,
    },
  },
});

const swiperSpecialization = new Swiper(".specialization__cards", {
  direction: "horizontal",
  loop: true,
  loopedSlides: 1.1,
  slidesPerView: 1.1,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  freeMode: {
    enabled: true,
    momentum: false,
  },

  speed: 8000,

  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
        this.params.speed = 500;
      });

      document
        .querySelector(".swiper-prev-specialization")
        .addEventListener("click", () => {
          this.autoplay.stop();
          this.params.speed = 500;
        });
      document
        .querySelector(".swiper-next-specialization")
        .addEventListener("click", () => {
          this.autoplay.stop();
          this.params.speed = 500;
        });
    },
  },

  pagination: false,

  navigation: {
    nextEl: ".swiper-next-specialization",
    prevEl: ".swiper-prev-specialization",
  },

  breakpoints: {
    500: {
      slidesPerView: 1.6,
      spaceBetween: 10,
    },
    720: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3.7,
      spaceBetween: 32,
    },

    1700: {
      slidesPerView: 4.5,
      spaceBetween: 32,
    },
  },
});

const swiperHospital2 = new Swiper(".hospital-swiper-2", {
  direction: "horizontal",
  spaceBetween: 32,
  slidesPerView: 1,
  pagination: false,
  speed: 500,
  parallax: true,
  effect: "fade",

  navigation: {
    nextEl: ".swiper-next-hospital-2",
    prevEl: ".swiper-prev-hospital-2",
  },
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const swiperSpecialists = new Swiper(".swiper-specialists", {
  direction: "horizontal",
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: 4.4,
  pagination: false,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 500,

  navigation: {
    nextEl: ".swiper-next-spec",
    prevEl: ".swiper-prev-spec",
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
    },
    init() {
      document
        .querySelector(".swiper-prev-spec")
        .addEventListener("click", () => {
          this.autoplay.stop();
          progressCircle.style.display = "none";
          const slids = document.querySelectorAll(
            ".swiper-specialists  .swiper-slide"
          );
          for (let i = 0; i < slids.length; i++) {
            const outlineCard = slids[i].querySelector(".slide-img");
            if (slids[i].classList.contains("swiper-slide-active")) {
              outlineCard.classList.add("outline--active");
            } else {
              outlineCard.classList.remove("outline--active");
            }
          }
        });
      document
        .querySelector(".swiper-next-spec")
        .addEventListener("click", () => {
          this.autoplay.stop();
          progressCircle.style.display = "none";
          const slids = document.querySelectorAll(
            ".swiper-specialists  .swiper-slide"
          );
          for (let i = 0; i < slids.length; i++) {
            const outlineCard = slids[i].querySelector(".slide-img");
            if (slids[i].classList.contains("swiper-slide-active")) {
              outlineCard.classList.add("outline--active");
            } else {
              outlineCard.classList.remove("outline--active");
            }
          }
        });

      document
        .querySelectorAll(".specialists__btns .modal-card")
        .forEach(function (e) {
          e.addEventListener("click", function () {
            swiperSpecialists.autoplay.stop();
            progressCircle.style.display = "none";
            const slids = document.querySelectorAll(
              ".swiper-specialists  .swiper-slide"
            );
            for (let i = 0; i < slids.length; i++) {
              const outlineCard = slids[i].querySelector(".slide-img");
              if (slids[i].classList.contains("swiper-slide-active")) {
                outlineCard.classList.add("outline--active");
              } else {
                outlineCard.classList.remove("outline--active");
              }
            }
          });
        });
    },
  },

  breakpoints: {
    360: {
      slidesPerView: 4.4,
    },
    721: {
      slidesPerView: 4.1,
    },
    850: {
      slidesPerView: 4,
    },
  },
});

const swiperSpecialistsCard = new Swiper(".swiper-specialists-2", {
  direction: "horizontal",
  initialSlide: 1,
  navigation: false,
  pagination: false,
  parallax: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 2000,
});

swiperSpecialists.controller.control = swiperSpecialistsCard;

const swiperMobile = new Swiper(".hero-swiper", {
  direction: "horizontal",
  initialSlide: 2,
  slidesPerView: 1.1,
  spaceBetween: 5,
  centeredSlides: true,
  navigation: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
  },
});


const swiperProgramsMobile = new Swiper(".programs-swiper", {
  direction: "horizontal",
  initialSlide: 0,
  slidesPerView: 1.1,
  spaceBetween: 5,
  centeredSlides: true,
  navigation: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    720: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
  },
});