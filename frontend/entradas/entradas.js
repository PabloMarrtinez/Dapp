const abiERC20 = [{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Tranfer","type":"event","signature":"0x5225eac2a7facfbeb099c00a4cc7c457701324f1fd84b84b14033f9e911374a4"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"successs","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xec556889"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferProxy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x4733dc8f"}]

const abiProxy = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint16","name":"defaultPrice","type":"uint16"},{"internalType":"uint16","name":"minPrice","type":"uint16"},{"internalType":"uint16","name":"maxPrice","type":"uint16"},{"internalType":"string","name":"name","type":"string"}],"indexed":false,"internalType":"struct PROXY.Evento","name":"_e","type":"tuple"}],"name":"EventSoldOut","type":"event","signature":"0xc2249fb9a863916c23b7b54ebb4d9cc024adce31cd69630800e9f63a636795fc"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint16","name":"defaultPrice","type":"uint16"},{"internalType":"uint16","name":"minPrice","type":"uint16"},{"internalType":"uint16","name":"maxPrice","type":"uint16"},{"internalType":"string","name":"name","type":"string"}],"indexed":false,"internalType":"struct PROXY.Evento","name":"_e","type":"tuple"}],"name":"NewEvent","type":"event","signature":"0xf1f8f882776e539806fe72d12dfb907fe16056912ffe499a2083c6079cf7b959"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"}],"name":"buyTicket","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xd881a8a0"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyToken","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x057466ea"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"cancelSellNft","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x59f48271"},{"inputs":[{"internalType":"uint24","name":"_index","type":"uint24"}],"name":"getActiveEvents","outputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint16","name":"defaultPrice","type":"uint16"},{"internalType":"uint16","name":"minPrice","type":"uint16"},{"internalType":"uint16","name":"maxPrice","type":"uint16"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct PROXY.Evento[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3efdff5f"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getEventID","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function","constant":true,"signature":"0x2b43ecf6"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"}],"name":"getallTokensEvent","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa6ad1407"},{"inputs":[{"internalType":"uint24","name":"_eventId","type":"uint24"}],"name":"infoEvent","outputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint16","name":"defaultPrice","type":"uint16"},{"internalType":"uint16","name":"minPrice","type":"uint16"},{"internalType":"uint16","name":"maxPrice","type":"uint16"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct PROXY.Evento","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf73abefd"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"modifyErc20","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x190531fc"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"modifyErc721","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xff33878d"},{"inputs":[{"internalType":"uint24","name":"_maxTicket","type":"uint24"},{"internalType":"uint16","name":"_defaultPrice","type":"uint16"},{"internalType":"uint16","name":"_minPrice","type":"uint16"},{"internalType":"uint16","name":"_maxPrice","type":"uint16"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"bool","name":"_active","type":"bool"},{"internalType":"uint24","name":"_id","type":"uint24"}],"name":"modifyEvent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xbbe51e8a"},{"inputs":[{"internalType":"uint24","name":"_maxTicket","type":"uint24"},{"internalType":"uint16","name":"_defaultPrice","type":"uint16"},{"internalType":"uint16","name":"_minPrice","type":"uint16"},{"internalType":"uint16","name":"_maxPrice","type":"uint16"},{"internalType":"string","name":"_name","type":"string"}],"name":"newEvent","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"nonpayable","type":"function","signature":"0xd2a23a96"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint16","name":"_price","type":"uint16"}],"name":"sellNft","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xfecd0a16"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"setAdminNFTs","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5e5b7440"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ticketPrice","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0d93e609"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"},{"internalType":"uint24","name":"price","type":"uint24"}],"name":"validPrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x682e28e7"}]

const abiERC721 = [{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"OwnerOrApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x55992814"},{"inputs":[{"internalType":"address","name":"_approved","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x081812fc"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getallTokens","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x13df4b2f"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe985e9c5"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x40c10f19"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x6352211e"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0x42842e0e"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xb88d4fde"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferProxy","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4733dc8f"}]

var data;

let identificadorEventoComprar;

const modal = document.querySelector('.modal'); 

const page_item = document.querySelector('.page_item');

const botonCerrar = document.querySelector('.botton_cerrar'); 


var ventaPrecioMin;
var ventaPrecioMax;
var ventaID;

botonCerrar.addEventListener('click', () => {
  modal.classList.remove('modal_flex'); 
});

async function obtenerDatos () {
  const respuesta = await fetch('../vars/var.json');
  data = await respuesta.json();

};

obtenerDatos();


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
    window.location.href = './entradas.html';

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




let web3;
let account;
let proxyContract;
let erc20contract;
let erc721contract;
var tokenID;
let x=0;

async function carga() {
  const address = document.querySelector('.direccion');
  
  const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  account = accounts[0];

  await contract(); 
}

async function contract() {
  web3 = new Web3(window.ethereum);
  erc20contract = new web3.eth.Contract(abiERC20,data.addressContractERC20);
  proxyContract = new web3.eth.Contract(abiProxy,data.addressContractProxy);
  erc721contract = new web3.eth.Contract(abiERC721,data.addressContractERC721);
  await interact();
}

async function interact(){ 
  const address = document.querySelector('.direccion');
  await erc20contract.methods.balanceOf(account).call().then(res => {
      const amount = web3.utils.fromWei(res, 'ether');
      const valueSpan = document.querySelector('.saldo_cantidad');
      valueSpan.innerHTML = amount;
  });

  await erc721contract.methods.getallTokens(account).call().then(res1 => {
    for (var i = 0; i < res1.length; i++) {
      proxyContract.methods.getEventID(res1[i]).call().then(res => {
        
        proxyContract.methods.infoEvent(res).call().then(res => {
          let id = res1[x];
          x++;
          addTicket(res[7],"6/6/2023",res[5],res[6],id);
          if (res1.length == x) initbuttons();
        });
    });
    }

});

}

function initbuttons(){
  const botones = document.querySelectorAll('.boton_vender'); 
  console.log(botones);
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      ventaPrecioMin = boton.classList[1];
      ventaID = boton.classList[3];
      ventaPrecioMax = boton.classList[2];
      modal.classList.add('modal_flex');
    });
  });
}

async function init() {

  await carga();
}

function addTicket(_nombre, _fecha, minprice, maxPrice, _id){

  var ticket = document.createElement("div");
  ticket.classList.add("ticket");

  var foto = document.createElement("div");
  foto.classList.add("foto");

  var autor = document.createElement("div");
  autor.classList.add(_nombre);

  var info = document.createElement("div");
  info.classList.add("info");

  var titulo = document.createElement("div");
  titulo.classList.add("titulo");
  titulo.textContent = _nombre;
  var fecha = document.createElement("div");
  fecha.classList.add("fecha");
  fecha.textContent = _fecha;

  var minP = document.createElement("div");
  minP.classList.add("minP");
  minP.textContent = "Precio mínimo: "+minprice;

  var maxP = document.createElement("div");
  maxP.classList.add("maxP");
  maxP.textContent = "Precio máximo: "+maxPrice;



  var vender = document.createElement("div");
  vender.classList.add("vender");

  var boton_vender = document.createElement("input");
  boton_vender.classList.add("boton_vender");
  boton_vender.classList.add(minprice);
  boton_vender.classList.add(maxPrice);
  boton_vender.classList.add(_id);

  boton_vender.setAttribute("type", "submit");
  boton_vender.setAttribute("value", "vender");

  foto.appendChild(autor);
  info.appendChild(titulo);
  info.appendChild(fecha);
  info.appendChild(minP);
  info.appendChild(maxP);

  vender.appendChild(boton_vender);

  ticket.appendChild(foto);
  ticket.appendChild(info);
  ticket.appendChild(vender);

  page_item.appendChild(ticket);





}

const precioVenta = document.querySelector('.precioVenta'); 

async function venderEntrada(){
  console.log(precioVenta.value);
  if (precioVenta.value < ventaPrecioMin || precioVenta.value > ventaPrecioMax) alert(`Precio de venta no válido, debe estar comprendido entre ${ventaPrecioMin}, y ${ventaPrecioMax} TOKS`);
  else{
    console.log(ventaPrecioMin);
    console.log(ventaID);
    console.log(ventaPrecioMax);
    modal.classList.remove('modal_flex'); 
  }

  proxyContract.methods.sellNft(ventaID,precioVenta.value).send({ from: account }).then(res => {
    console.log(res);

    
  }); 
}

const confirmarCompra = document.querySelector('.button_confirm'); 
const cancelarCompra = document.querySelector('.button_cancel'); 

confirmarCompra.addEventListener('click', () => {
  venderEntrada();

});

cancelarCompra.addEventListener('click', () => {
  modal.classList.remove('modal_flex'); 
});

window.onload = init();
                                                             