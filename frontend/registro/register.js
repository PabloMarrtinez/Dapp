
const botonMovil = document.querySelector('.movil');
const botonPortatil = document.querySelector('.portatil');
let modo = 1;

botonMovil.addEventListener('click', function() {
    if(botonMovil.classList[2] == "elegido");
    else{
        botonMovil.classList.toggle('elegido');
        modo = 0;
        if(botonPortatil.classList[2] == "elegido")botonPortatil.classList.toggle('elegido');
    }


});

botonPortatil.addEventListener('click', function() {
    if(botonPortatil.classList[2] == "elegido");
    else{
        modo = 1;
        botonPortatil.classList.toggle('elegido');
        if(botonMovil.classList[2] == "elegido")botonMovil.classList.toggle('elegido');
    }


});

const botonEntrar = document.querySelector('.button_input');

botonEntrar.addEventListener('click', function() {
    if (modo == 1) window.location.href = './login.html'; 

});