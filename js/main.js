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

//1. находим все кнопки
const accordionBtnAll = document.querySelectorAll('.accordion__btn');
//2. обходим их через forEach
accordionBtnAll.forEach(item => {
  //3. вешаем прослушку событий по клику
  item.addEventListener('click', () => {
    //4. каждой кнопке вешаем переключатель (toggle) active
    item.classList.toggle('accordion__btn-active');
    //5. каждому контенту вешаем переключатель (toggle) show
    item.nextElementSibling.classList.toggle('accordion__content-show');
  });
});

const productListItemAll = document.querySelectorAll('.product__list-item');
const accBtnAll = document.querySelectorAll('.accordion__btn');
const accContentAll = document.querySelectorAll('.accordion__content');

productListItemAll.forEach(item => {
  item.addEventListener('click', () => {
    let currentBtn = item;
    let tabId = Number(currentBtn.getAttribute('product-id').slice(-1));
    accContentAll.forEach((item)=>{
      item.classList.remove('accordion__content-show')
    })
    accBtnAll.forEach(item => {
      item.classList.remove('accordion__btn-active');
      Number(item.getAttribute('id').slice(-1)) === tabId
        ? item.click()
        : console.log();
    });
  });
});
