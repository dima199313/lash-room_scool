//Плавный скролл к якорю
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

//Инициализация скролл эффектов
AOS.init();

//Аккордион
const accordionBtnAll = document.querySelectorAll('.accordion__btn');
accordionBtnAll.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('accordion__btn-active');
    item.nextElementSibling.classList.toggle('accordion__content-show');
  });
});

const productListItemAll = document.querySelectorAll('.product__list-item');
const accBtnAll = document.querySelectorAll('.accordion__btn');
const accContentAll = document.querySelectorAll('.accordion__content');

productListItemAll.forEach(item => {
  item.addEventListener('click', () => {
    let currentBtn = item;
    let tabId = Number(currentBtn.getAttribute('data-product').slice(-1));
    accContentAll.forEach(item => {
      item.classList.remove('accordion__content-show');
    });
    accBtnAll.forEach(item => {
      item.classList.remove('accordion__btn-active');
      Number(item.getAttribute('id').slice(-1)) === tabId
        ? item.click()
        : console.log();
    });
  });
});

//navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});
nav.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});

//credit-slider
$(document).ready(function () {
  $('.credit__slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"  type="button"></button>',
    nextArrow: '<button class="slick-next"  type="button"></button>',
    responsive: [
      {
        breakpoint: 899,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          // slidesToShow: 3
        }
      },
    ]
    // setting-name: setting-value
  });
});
