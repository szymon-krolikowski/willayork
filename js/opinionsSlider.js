if(window.screen.width < 768) {
    let swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
} else if(window.screen.width < 992) {
    let swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 0,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
} else {
    let swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
};