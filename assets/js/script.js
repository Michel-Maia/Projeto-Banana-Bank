let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
});


// esconder ou mostrar uma div 
var btn = document.querySelector('#btnbotao-inicio');
var container = document.querySelector('.container');

btn.addEventListener('click', function() {
    if(container.style.display === 'block') {
        container.style.display = 'none';

    } else {
        container.style.display = 'block';
    }
});

