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
            1500:{
                items:3,
                nav:false
            }
        }
    });
});