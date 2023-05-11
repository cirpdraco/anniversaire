let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('acvtive');
}

/*    EFECTO SWIPER-SLIDER    */
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    /*loop:true,*/

    pagination: {
      el: ".swiper-pagination",
    },
    autoplay:{
        delay:1000000, disableOnInteraction:false,
    }
});

