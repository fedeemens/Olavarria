const toggle = document.querySelector("#toggle");
const inicio = document.querySelector("#nav-inicio");
const nosotros = document.querySelector("#nav-nosotros");
const contacto = document.querySelector("#nav-contacto");
const nav = document.querySelector("#nav");

// toggle.addEventListener('click',function () {
//     nav.classList.toggle("desplegado");
// })
function togglear() {
    nav.classList.toggle("desplegado");
}
toggle.addEventListener('click',togglear);
inicio.addEventListener('click',togglear);
nosotros.addEventListener('click',togglear);
contacto.addEventListener('click',togglear);

estadoWhap = document.querySelector('#estado-whap');
setInterval (function(){
    if (estadoWhap.innerText == "en linea") {
        estadoWhap.innerText = "escribiendo";
    }
    else {
        estadoWhap.innerText = "en linea";
    }
}, 2000);

//OWL carrousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

//Scroll reveal
ScrollReveal().reveal('.reveal-left', {
    distance: '200px',
    duration: 1500,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'left',
    viewFactor: 0.4,
    desktop: true,
    mobile: false
});
ScrollReveal().reveal('.reveal-right', {
    distance: '200px',
    duration: 1500,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'right',
    viewFactor: 0.4,
    desktop: true,
    mobile: false
});
ScrollReveal().reveal('.reveal-mid', {
    delay: 300,
    distance: '0px',
    duration: 2000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'top',
    viewFactor: 0.4,
    desktop: true,
    mobile: false
});
ScrollReveal().reveal('.reveal-left', {
    distance: '200px',
    duration: 1100,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'left',
    desktop: false,
    mobile: true
});
ScrollReveal().reveal('.reveal-right', {
    distance: '200px',
    duration: 1100,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'right',
    desktop: false,
    mobile: true
});
ScrollReveal().reveal('.reveal-mid', {
    distance: '0px',
    duration: 1100,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'top',
    desktop: false,
    mobile: true
});