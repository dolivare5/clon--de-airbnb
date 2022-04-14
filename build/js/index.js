let contenedor = document.querySelector('.barra__contenedor');
let barra = document.querySelector('.barra');

window.onscroll = function () {
    let y = window.scrollY;

    console.log(y)
   if (y>=130){
       barra.classList.add(('barra--fijar'));
       contenedor.classList.add('barra--modificar');
       barra.classList.remove('contenedor');
   }else{
       contenedor.classList.remove('barra--modificar');
       barra.classList.remove(('barra--fijar'));
       barra.classList.add('contenedor');
   }
}

const ancho = window.innerWidth;
const altura = window.innerHeight;

if (ancho <=480){
    const barra_busqueda = document.querySelector('.barra__campo-busqueda');
    barra_busqueda.placeholder = '¿A donde vas?';
}

console.log(`${ancho} x ${altura}`)