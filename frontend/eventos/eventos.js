
const MenuIcono = document.querySelector('.menu_icono');
const menu_desplegable = document.querySelector('.menu_desplegable');
const page_item = document.querySelector('.page_item');

MenuIcono.addEventListener('click', function() {

    menu_desplegable.classList.toggle('menu_desplegable_abajo');

  });


const evento = document.querySelector('.eventos');
evento.addEventListener('click', function() {
    window.location.href = './eventos.html';
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

const addressContractERC20 = '0x44A8b1D5D3198dC5935C2FB9cba4cE07625840b6';
const abiERC20 = [{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Tranfer","type":"event","signature":"0x5225eac2a7facfbeb099c00a4cc7c457701324f1fd84b84b14033f9e911374a4"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"successs","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xec556889"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferProxy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x4733dc8f"}]
 
const addressContractProxy = '0xFE840e487527Bb9516Be60118C30064a94fc8EA1';
const abiProxy = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint16","name":"defaultPrice","type":"uint16"},{"internalType":"uint16","name":"minPrice","type":"uint16"},{"internalType":"uint16","name":"maxPrice","type":"uint16"},{"internalType":"string","name":"name","type":"string"}],"indexed":false,"internalType":"struct PROXY.Evento","name":"_e","type":"tuple"}],"name":"EventSoldOut","type":"event","signature":"0xc2249fb9a863916c23b7b54ebb4d9cc024adce31cd69630800e9f63a636795fc"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint16","name":"defaultPrice","type":"uint16"},{"internalType":"uint16","name":"minPrice","type":"uint16"},{"internalType":"uint16","name":"maxPrice","type":"uint16"},{"internalType":"string","name":"name","type":"string"}],"indexed":false,"internalType":"struct PROXY.Evento","name":"_e","type":"tuple"}],"name":"NewEvent","type":"event","signature":"0xf1f8f882776e539806fe72d12dfb907fe16056912ffe499a2083c6079cf7b959"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"}],"name":"buyTicket","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xd881a8a0"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyToken","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x057466ea"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"cancelSellNft","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x59f48271"},{"inputs":[{"internalType":"uint24","name":"_index","type":"uint24"}],"name":"getActiveEvents","outputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint16","name":"defaultPrice","type":"uint16"},{"internalType":"uint16","name":"minPrice","type":"uint16"},{"internalType":"uint16","name":"maxPrice","type":"uint16"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct PROXY.Evento[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3efdff5f"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getEventID","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function","constant":true,"signature":"0x2b43ecf6"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"}],"name":"getallTokensEvent","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa6ad1407"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"modifyErc20","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x190531fc"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"modifyErc721","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xff33878d"},{"inputs":[{"internalType":"uint24","name":"_maxTicket","type":"uint24"},{"internalType":"uint16","name":"_defaultPrice","type":"uint16"},{"internalType":"uint16","name":"_minPrice","type":"uint16"},{"internalType":"uint16","name":"_maxPrice","type":"uint16"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"bool","name":"_active","type":"bool"},{"internalType":"uint24","name":"_id","type":"uint24"}],"name":"modifyEvent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xbbe51e8a"},{"inputs":[{"internalType":"uint24","name":"_maxTicket","type":"uint24"},{"internalType":"uint16","name":"_defaultPrice","type":"uint16"},{"internalType":"uint16","name":"_minPrice","type":"uint16"},{"internalType":"uint16","name":"_maxPrice","type":"uint16"},{"internalType":"string","name":"_name","type":"string"}],"name":"newEvent","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"nonpayable","type":"function","signature":"0xd2a23a96"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint16","name":"_price","type":"uint16"}],"name":"sellNft","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xfecd0a16"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"setAdminNFTs","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5e5b7440"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ticketPrice","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0d93e609"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"},{"internalType":"uint24","name":"price","type":"uint24"}],"name":"validPrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x682e28e7"}];




let web3;
let account;
let ERC20Contract;
let proxyContract;
let events;

async function carga() {

  const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  account = accounts[0];
  contract(); 
  
}

async function contract() {
  web3 = new Web3(window.ethereum);
  ERC20Contract = new web3.eth.Contract(abiERC20,addressContractERC20);
  proxyContract = new web3.eth.Contract(abiProxy,addressContractProxy);
  interact();
}

function interact(){ 
  const address = document.querySelector('.direccion');
  ERC20Contract.methods.balanceOf(account).call().then(res => {
      const amount = web3.utils.fromWei(res, 'ether');
      const valueSpan = document.querySelector('.saldo_cantidad');
      valueSpan.innerHTML = amount;
  });
  getEvents();
}

async function getEvents(){ 
  events = await proxyContract.methods.getActiveEvents(0).call({ from: account }).then(res => {
    console.log(res);
    for (var i = 0; i < res.length; i++) {
      addEvent(res[i][7],res[i][0],"5/6/2023",res[i][1])
    }
    
  }); 
}

function addEvent(_nombre, _precio, _fecha, _entradasRestantes){
  //Creacion de la primera parte
  var evento = document.createElement("div");
  evento.classList.add("evento");
  var foto = document.createElement("div");
  foto.classList.add("foto");
  var autor = document.createElement("div");
  autor.classList.add(_nombre);



  //Creación de la segunda parte
  var info = document.createElement("div");
  info.classList.add("info");
  var titulo = document.createElement("div");
  titulo.classList.add("titulo");
  titulo.textContent = _nombre;
  var fecha = document.createElement("div");
  fecha.classList.add("fecha");
  fecha.textContent = _fecha;
  var precio = document.createElement("div");
  precio.classList.add("precio");
  precio.textContent = "Precio: "+_precio+" TOKS";
  var entradasRestantes = document.createElement("div");
  entradasRestantes.classList.add("entradasRestantes");
  entradasRestantes.textContent = "Entradas restantes: "+_entradasRestantes;
  var comprar = document.createElement("input");
  comprar.classList.add("comprar");
  comprar.setAttribute("type", "submit");
  comprar.setAttribute("value", "Comprar");


  //Agregamos la primera parte.
  foto.appendChild(autor);

  //Agregamos la segunda.
  info.appendChild(titulo);
  info.appendChild(fecha);
  info.appendChild(precio);
  info.appendChild(entradasRestantes);
  info.appendChild(comprar);

  evento.appendChild(foto);
  evento.appendChild(info);

  // Agregamos el elemento <div> "evento" al cuerpo del documento HTML
  page_item.appendChild(evento);


}


function init() {
  
  carga();
}

window.onload = init();
                                                             