
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
                    } else {
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

// Images
const paginationSec = document.querySelector('.pagination');
let paginations = paginationSec.querySelectorAll('.dot');
const imagesSec = document.querySelector('.images .list');

// Set banner size
const images = imagesSec.querySelectorAll("img");
$('.images .list').css('width', `${images.length * 100}%`);
for (let x = 0; x < images.length; x++) {
          $(`.images .list img:nth-child(${x + 1})`).css('width', `${100 / images.length}%`);
}


// Set Pagination
for (let y = 0; y < images.length; y++) {
          let liElement = document.createElement('div');
          liElement.classList.add('dot');
          paginationSec.append(liElement);
          paginations = paginationSec.querySelectorAll('div')
}

paginations[0].classList.add('active');

for (let i = 0; i < paginations.length; i++) {
          const element = paginations[i];
          element.addEventListener('click', () => {
                    resetPagination();
                    changeBanner(i + 1);
          });
}

let currentBanner = 1;

function changeBanner(index) {
          let translation = (currentBanner - index) * 100;
          for (let m = 0; m < images.length; m++) {
                    $(`.images .list img:nth-child(${m + 1})`).css('transform', `translateX(${translation}%)`);
          }
          paginations[index - 1].classList.add('active');
}

function resetPagination() {
          for (let i = 0; i < paginations.length; i++) {
                    const element = paginations[i];
                    element.classList.remove('active');
          }
}
