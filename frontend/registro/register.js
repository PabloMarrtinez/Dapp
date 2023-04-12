
/* const botonMovil = document.querySelector('.movil');
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
 */
const botonEntrar = document.querySelector('.button_input');

const username = document.querySelector('.username_input');
const pass1 = document.querySelector('.pass1');
const pass2 = document.querySelector('.pass2');
const age = document.querySelector('.age_input');
const phone = document.querySelector('.phone_input');
const mail = document.querySelector('.mail_input');

botonEntrar.addEventListener('click', function() {
    if (username.value == "" || pass1.value == "" || pass2.value == "" || age.value == "" || phone.value == "" || mail.value == ""){
        alert("Debes rellenar todos los campos");
        
    }
    else if(pass1.value !== pass2.value){
        alert("Las contraseñas deben coincidir");
    }
    else{
        console.log("correcto");
        fetch('http://192.168.1.118:80/app/webservice/add.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username=' + encodeURIComponent(username.value) + '&password=' + encodeURIComponent(pass1.value) + '&phone=' + encodeURIComponent(phone.value) + '&mail' + encodeURIComponent(mail.value) + '&age'+ encodeURIComponent(age.value) 
            })
            .then(response => {
            if (response.ok) {
                console.log('Usuario añadido correctamente');
            } else if (response.status === 404) {
                console.log('Contraseña incorrecta');
            } else {
                console.log('Error al añadir usuario');
            }
            })
            .catch(error => console.error('Error:', error));
    }

    //if (modo == 1) window.location.href = './login.html'; 

});