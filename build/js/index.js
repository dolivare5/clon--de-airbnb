let contenedor = document.querySelector('.header__contenedor');
let barra = document.querySelector('.header');
let barra_busqueda = document.querySelector('.header__busqueda');
window.onscroll = function () {
    let scoll_recorrido = window.scrollY;

    let scoll = document.getElementById("scroll");

    if (scoll_recorrido>=130 && scroll!== null){
       barra.classList.add(('header--fijar'));
       barra_busqueda.classList.add('header__busqueda--activar');
       contenedor.classList.add('header--modificar');
       barra.classList.remove('contenedor');
        console.log(scoll)
   }else{
       contenedor.classList.remove('header--modificar');
       barra.classList.remove(('header--fijar'));
       barra.classList.add('contenedor');
       barra_busqueda.classList.remove('header__busqueda--activar')
   }
}

const ancho = window.innerWidth;
const altura = window.innerHeight;

if (ancho <=480){
    const barra_busqueda = document.querySelector('.header__campo-busqueda');
    barra_busqueda.placeholder = '¿A donde vas?';
}