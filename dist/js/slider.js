export default function slider(){
  
 let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
          650: {
            slidesPerView: 2,
            spaceBetween: 40
          },

          900: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
        setWrapperSize: true,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});
}