var data;

async function obtenerDatos () {
  const respuesta = await fetch('../vars/var.json');
  data = await respuesta.json();

};




const MenuIcono = document.querySelector('.menu_icono');
const menu_desplegable = document.querySelector('.menu_desplegable');

MenuIcono.addEventListener('click', function() {

    menu_desplegable.classList.toggle('menu_desplegable_abajo');

  });

const evento = document.querySelector('.eventos');
evento.addEventListener('click', function() {
    window.location.href = '../eventos/eventos.html';
  });

const tickets = document.querySelector('.tickets');

tickets.addEventListener('click', function() {
    window.location.href = '../entradas/entradas.html';

});

const market = document.querySelector('.market');
market.addEventListener('click', function() {
    window.location.href = '../marketplace/marketplace.html';
});

const perfil = document.querySelector('.perfil');
perfil.addEventListener('click', function() {
    window.location.href = '../perfil/perfil.html';
});

const logout = document.querySelector('.logout');
logout.addEventListener('click', function() {
    window.location.href = '../registro/login.html';
});

const transferencia = document.querySelector('.transferencia');
transferencia.addEventListener('click', function() {
    window.location.href = './transferencia.html';
});

const abiERC20 = [{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Tranfer","type":"event","signature":"0x5225eac2a7facfbeb099c00a4cc7c457701324f1fd84b84b14033f9e911374a4"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"successs","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xec556889"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferProxy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x4733dc8f"}]


let web3;
let account;
let ERC20Contract;

async function carga() {

  const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  account = accounts[0];
  contract(); 
}


async function init() {
  
  carga();
  await obtenerDatos();
  const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  account = accounts[0];
  contract(); 

}

function contract() {
  web3 = new Web3(window.ethereum);
  ERC20Contract = new web3.eth.Contract(abiERC20,data.addressContractERC20);
  interact();
}

function interact(){ 
  const address = document.querySelector('.direccion');
  ERC20Contract.methods.balanceOf(account).call().then(res => {
    amount = res / 10000;
    const valueSpan = document.querySelector('.saldo_cantidad');
    valueSpan.innerHTML = amount;
  });
}


const envio = document.querySelector('.botonEnvio');


envio.addEventListener('click', async function() {
  const direccion = document.querySelector('.direccionEnvio');
  const cantidad = document.querySelector('.cantidad');

  if(direccion.value == "" || cantidad.value==""){
    alert("Debes rellenar todos los campos");
  }
  else{
    let dinero = cantidad.value*(10000);
    console.log(dinero);
    await ERC20Contract.methods.transfer(direccion.value,dinero).send({ from: account }).then(res => {
      console.log(res);
  });
  location.reload();
  }
});

const modal2 = document.querySelector('.modal2');
const comprarTokens = document.querySelector('.comprarTokens');
comprarTokens.addEventListener('click', async function() {
  modal2.classList.add("modal_flex");
});

const cerrarModal = document.querySelector('.icono_cerrar');
cerrarModal.addEventListener('click', async function() {
  modal2.classList.remove("modal_flex");
});

const confirmarCompra = document.querySelector('.confirmarCompra');
const cantidadToken = document.querySelector('.cantidadToken');
let cantidadTokensComprar;
confirmarCompra.addEventListener('click', async function() {
  cantidadTokensComprar = cantidadToken.value;
  if (cantidadTokensComprar == "") alert("Cantidad inválida");
  else {
    console.log(account);
    await fetch(`http://localhost:4000/realizarCompra?cantidad=${cantidadTokensComprar}&direccion=${account}`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Imprime en la consola el valor booleano recibido del servidor

      })
      .catch(error => {
        console.error(error); // Manejo de errores
      });
    location.reload();
  }

});

confirmarCompra


window.onload = init();