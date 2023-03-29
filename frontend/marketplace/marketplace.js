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
    window.location.href = './marketplace.html';
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
    window.location.href = '../transferencia/transferencia.html';
});


const abiERC20 = [{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Tranfer","type":"event","signature":"0x5225eac2a7facfbeb099c00a4cc7c457701324f1fd84b84b14033f9e911374a4"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"successs","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xec556889"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferProxy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x4733dc8f"}]

const abiProxy = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint56","name":"defaultPrice","type":"uint56"},{"internalType":"uint56","name":"minPrice","type":"uint56"},{"internalType":"uint56","name":"maxPrice","type":"uint56"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint24","name":"eventID","type":"uint24"}],"indexed":false,"internalType":"struct PROXY.Evento","name":"_e","type":"tuple"}],"name":"EventSoldOut","type":"event","signature":"0x8a330b849574e95f156d67326e305a258132b4ec9f9d84cab3d982cb20a4c3de"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint56","name":"defaultPrice","type":"uint56"},{"internalType":"uint56","name":"minPrice","type":"uint56"},{"internalType":"uint56","name":"maxPrice","type":"uint56"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint24","name":"eventID","type":"uint24"}],"indexed":false,"internalType":"struct PROXY.Evento","name":"_e","type":"tuple"}],"name":"NewEvent","type":"event","signature":"0xe3f5cda6d9e2c0341d9ce383cd415b6ad43f8a52fbaeddd76b7068d43430ca98"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"}],"name":"buyTicket","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xd881a8a0"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyToken","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x057466ea"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"cancelSellNft","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x59f48271"},{"inputs":[{"internalType":"uint24","name":"_index","type":"uint24"}],"name":"getActiveEvents","outputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint56","name":"defaultPrice","type":"uint56"},{"internalType":"uint56","name":"minPrice","type":"uint56"},{"internalType":"uint56","name":"maxPrice","type":"uint56"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint24","name":"eventID","type":"uint24"}],"internalType":"struct PROXY.Evento[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3efdff5f"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getEventID","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function","constant":true,"signature":"0x2b43ecf6"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"}],"name":"getallTokensEvent","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa6ad1407"},{"inputs":[{"internalType":"uint24","name":"_eventId","type":"uint24"}],"name":"infoEvent","outputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint56","name":"defaultPrice","type":"uint56"},{"internalType":"uint56","name":"minPrice","type":"uint56"},{"internalType":"uint56","name":"maxPrice","type":"uint56"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint24","name":"eventID","type":"uint24"}],"internalType":"struct PROXY.Evento","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf73abefd"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"modifyErc20","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x190531fc"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"modifyErc721","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xff33878d"},{"inputs":[{"internalType":"uint24","name":"_maxTicket","type":"uint24"},{"internalType":"uint56","name":"_defaultPrice","type":"uint56"},{"internalType":"uint56","name":"_minPrice","type":"uint56"},{"internalType":"uint56","name":"_maxPrice","type":"uint56"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"bool","name":"_active","type":"bool"},{"internalType":"uint24","name":"_id","type":"uint24"}],"name":"modifyEvent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x759970e1"},{"inputs":[{"internalType":"uint24","name":"_maxTicket","type":"uint24"},{"internalType":"uint56","name":"_defaultPrice","type":"uint56"},{"internalType":"uint56","name":"_minPrice","type":"uint56"},{"internalType":"uint56","name":"_maxPrice","type":"uint56"},{"internalType":"string","name":"_name","type":"string"}],"name":"newEvent","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"nonpayable","type":"function","signature":"0xba4350c9"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint56","name":"_price","type":"uint56"}],"name":"sellNft","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf6c2f92c"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"setAdminNFTs","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5e5b7440"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ticketPrice","outputs":[{"internalType":"uint56","name":"","type":"uint56"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0d93e609"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"},{"internalType":"uint56","name":"price","type":"uint56"}],"name":"validPrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa85964a9"}]


let web3;
let account;
let ERC20Contract;
let proxyContract;
let amount;

async function carga() {
  const address = document.querySelector('.direccion');
  
  const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  account = accounts[0];
  contract(); 
}
function contract() {
  web3 = new Web3(window.ethereum);
  ERC20Contract = new web3.eth.Contract(abiERC20,data.addressContractERC20);
  proxyContract = new web3.eth.Contract(abiProxy,data.addressContractProxy);
  interact();
}

let identificadorEventoComprar;
const modal = document.querySelector('.modal'); 
const botonCerrar = modal.querySelector('.botton_cerrar'); 


async function interact(){ 
  const address = document.querySelector('.direccion');
  ERC20Contract.methods.balanceOf(account).call().then(res => {
    amount = res / 10000;
    const valueSpan = document.querySelector('.saldo_cantidad');
    valueSpan.innerHTML = amount;
  });

  proxyContract.methods.getActiveEvents(0).call({ from: account }).then(res => {
    console.log(res);
    for (let index = 0; index < res.length; index++) {
      addEvent(res[index][7],res[index][8],"09/11/2023")
      
    }
    const botones = document.querySelectorAll('.comprar'); 

    botones.forEach(boton => {
      boton.addEventListener('click', () => {
        identificadorEventoComprar = boton.classList[1];
        modal.classList.add('modal_flex');
        consultarEntradasReventa(boton.classList[1]);
      });
    });
    botonCerrar.addEventListener('click', () => {
      modal.classList.remove('modal_flex'); 
    });
  }); 
}

/* <div class="modalEntradaItem">
<div class="itemID">Id: 230824243</div>
<div class="itemprecioFinal">Precio: 15 TOKS</div>
<input type="button" class="botonComprar" value="Comprar">

</div> */

let entradaParaComprar;

async function consultarEntradasReventa(_id){
  var elementos = document.querySelectorAll('.modalEntradaItem');
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].remove();
  }
  events = await proxyContract.methods.getallTokensEvent(_id).call({ from: account }).then(res => {

    for (let index = 0; index < res.length; index++) {

      proxyContract.methods.ticketPrice(res[index]).call({ from: account }).then(res2 => {
        addTicket(res[index],res2);    
        if(index == res.length-1) {
          const botones = document.querySelectorAll('.botonComprar'); 
          console.log(botones);
          botones.forEach(boton => {
            boton.addEventListener('click',async () => {
              if(amount < boton.classList[2]/10000){
                alert('No tienes suficientes fondos');
              }
              else{
                await proxyContract.methods.buyToken(boton.classList[1],boton.classList[2]).send({ from: account }).then(res => {
                  console.log(res);
              
                  
                }); 
                location.reload();
              }

      
            });
          });
        }
      });       
    }

  }); 
}

const modal_info = document.querySelector('.modal_info');

async function addTicket(id, precio){
  var  modalEntradaItem = document.createElement("div");
  modalEntradaItem.classList.add("modalEntradaItem");
  var  itemID = document.createElement("div");
  itemID.classList.add("itemID");
  itemID.textContent = `ID: ${id}`;

  var  itemprecioFinal = document.createElement("div");
  itemprecioFinal.classList.add("itemprecioFinal");
  itemprecioFinal.textContent = `Precio: ${precio/10000} TOKS`;

  var  modalEntradaItem = document.createElement("div");
  modalEntradaItem.classList.add("modalEntradaItem");

  var  boton = document.createElement("input");
  boton.classList.add("botonComprar");
  boton.classList.add(id);
  boton.classList.add(precio);
  boton.setAttribute("type", "submit");
  boton.setAttribute("value", "Comprar");

  modalEntradaItem.appendChild(itemID);
  modalEntradaItem.appendChild(itemprecioFinal);
  modalEntradaItem.appendChild(boton);

  modal_info.appendChild((modalEntradaItem));

}


const page_item = document.querySelector('.page_item');


async function addEvent(_nombre, _id, _fecha){
  var  evento = document.createElement("div");
  evento.classList.add("evento");
  var  foto = document.createElement("div");
  foto.classList.add("foto");
  var  autor = document.createElement("div");
  autor.classList.add(_nombre);
  var  info = document.createElement("div");
  info.classList.add("info");
  var  titulo = document.createElement("div");
  titulo.classList.add("titulo");
  titulo.textContent = _nombre;
  var  fecha = document.createElement("div");
  fecha.classList.add("fecha");
  fecha.textContent = _fecha;
  var  boton = document.createElement("input");
  boton.classList.add("comprar");
  boton.classList.add(_id);
  boton.setAttribute("type", "submit");
  boton.setAttribute("value", "Reventa de entradas");

  foto.appendChild(autor);

  info.appendChild(titulo);
  info.appendChild(fecha);
  info.appendChild(boton);

  evento.appendChild(foto);
  evento.appendChild(info);

  page_item.appendChild(evento);
}

async function init() {
  await obtenerDatos();
  carga();
}

window.onload = init();
                                                             