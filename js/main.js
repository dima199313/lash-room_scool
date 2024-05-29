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

// Появление частей сайта
const allSections = document.querySelectorAll('.section');

const appearanceSection = function (entries, observer) {
  const entry = entries[0];
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); //больше не обозревать
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.1,
  rootMargin: `0px`,
});

allSections.forEach(function (section) {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});
