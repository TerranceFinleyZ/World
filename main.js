var typed = new Typed(".text", {
    strings: ["Web Development", "E-Commerce", "Artificial Intelligence", "SaaS Engineering"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

window.onscroll = () => {
    let header = document.querySelector('.header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
;}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});