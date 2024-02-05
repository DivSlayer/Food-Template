const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Set slides size
$('.slides').css('width', `${slides.length * 100}%`);
for (let x = 0; x < slides.length; x++) {
          $(`.slides div:nth-child(${x + 1})`).css('width', `${100 / slides.length}%`);
}

// Set Pagination
let currentSlide = 1;

next.addEventListener('click', () => {
          if (currentSlide + 1 > slides.length) {
                    currentSlide = 1;
                    changeBanner(2);
          } else {
                    currentSlide++;
                    changeBanner(currentSlide + 1);
          }
          console.log(`current: ${currentSlide}`);
});
prev.addEventListener('click', () => {
          if (currentSlide > 1) {
                    currentSlide--;
                    changeBanner(currentSlide + 1);
          } else {
                    currentSlide = slides.length;
                    changeBanner(slides.length + 1);
          }
          console.log(`current: ${currentSlide}`);
});
function changeBanner(index) {
          let translation = -(index - 2) * 100;
          console.log(`current: ${currentSlide}, Index: ${index}, trans: ${translation}`);
          for (let m = 0; m < slides.length; m++) {
                    $(`.slides div:nth-child(${m + 1})`).css('transform', `translateX(${translation}%)`);
          }
}

// Menu Toggle
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.navigation');
menuToggle.onclick = () => {
          menuToggle.classList.toggle('active');
          menu.classList.toggle('active');
}

// Header Style
window.onscroll = () => {
          let scrollLength = $(this).scrollTop();
          if (scrollLength > 300) {
                    $('header').addClass('fixed');
                    if (scrollLength > 350) {
                              $('header').addClass('active');
                    }else{
                              $('header').removeClass('active');
                    }
          } else {
                    if ($('header').hasClass('active')) {
                              $('header').removeClass('active');
                    }
                    if ($('header').hasClass('fixed')) {
                              $('header').removeClass('fixed');
                    }
          }
}

// Go to top button
$('.goTop').fadeOut(300);
$(window).scroll(function () {
          let scrollNum = $(this).scrollTop();
          if (scrollNum > 500) {
                    $('.goTop').fadeIn(300);
          } else {
                    $('.goTop').fadeOut(300);
          }
});

$('.goTop').click(function (e) {
          e.preventDefault();
          $(window).scrollTop(0);
});

// Filter foods
const filters = document.querySelectorAll('.filters li');
const foods = document.querySelectorAll('.food-list .foods li');
let currentFilter = 'all';

for (let i = 0; i < filters.length; i++) {
          const filter = filters[i];
          filter.addEventListener('click', () => {
                    activateFilter(i);
                    unHid();
                    currentFilter = filter.innerHTML.toLowerCase();
                    const result = filterFood();
                    let minus = Array.from(foods).filter(n => !Array.from(result).includes(n));
                    hidMinus(minus);
          });
}
function activateFilter(index) {
          for (let x = 0; x < filters.length; x++) {
                    const filter = filters[x];
                    filter.classList.remove('active');
          }
          filters[index].classList.add('active');
}
function filterFood(food) {
          let filtered = [];
          for (let i = 0; i < foods.length; i++) {
                    if (currentFilter == 'all') {
                              filtered.push(foods[i]);
                    }
                    else {
                              if (foods[i].className == currentFilter) {
                                        filtered.push(foods[i]);
                              }
                    }
          }
          return filtered;
}
function hidMinus(minus) {
          for (let i = 0; i < minus.length; i++) {
                    const element = minus[i];
                    element.classList.add('hidden');
          }
}
function unHid() {
          for (let i = 0; i < foods.length; i++) {
                    const element = foods[i];
                    element.classList.remove('hidden');
          }
}