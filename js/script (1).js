const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

i = 0;

function ActiveSlide(n) {
    for (slide of slides) {
        slide.classList.remove('active');
        slides[n].classList.add('active');
    }
}

next.addEventListener('click', () => {
    if (i !== slides.length - 1) {
        i++;
        ActiveSlide(i);
    } else {
        ActiveSlide(0);
        i = 0;
    }
});

prev.addEventListener('click', () => {
    if (i !== 0) {
        i--;
        ActiveSlide(i);
    } else {
        ActiveSlide(slides.length - 1);
        i = slides.length - 1;
    }
    console.log(i);
    console.log(slides.length - 1);
});

// Menu Toggle
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.navigation');
menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

// Header Style
// window.onscroll = () => {
//     let scrollLength = $(this).scrollTop();
//     if(scrollLength > 300){
//         $('header').addClass('fixed');
//         $('header').addClass('active');
//     }else{
//         if($('header').hasClass('active')){
//             $('header').removeClass('active');
//         }
//         if($('header').hasClass('fixed')){
//             $('header').removeClass('fixed');
//         }
//     }
// }

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