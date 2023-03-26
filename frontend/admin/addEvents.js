var data;

async function obtenerDatos () {
  const respuesta = await fetch('../vars/var.json');
  data = await respuesta.json();

};

obtenerDatos();

const abiProxy = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint56","name":"defaultPrice","type":"uint56"},{"internalType":"uint56","name":"minPrice","type":"uint56"},{"internalType":"uint56","name":"maxPrice","type":"uint56"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint24","name":"eventID","type":"uint24"}],"indexed":false,"internalType":"struct PROXY.Evento","name":"_e","type":"tuple"}],"name":"EventSoldOut","type":"event","signature":"0x8a330b849574e95f156d67326e305a258132b4ec9f9d84cab3d982cb20a4c3de"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint56","name":"defaultPrice","type":"uint56"},{"internalType":"uint56","name":"minPrice","type":"uint56"},{"internalType":"uint56","name":"maxPrice","type":"uint56"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint24","name":"eventID","type":"uint24"}],"indexed":false,"internalType":"struct PROXY.Evento","name":"_e","type":"tuple"}],"name":"NewEvent","type":"event","signature":"0xe3f5cda6d9e2c0341d9ce383cd415b6ad43f8a52fbaeddd76b7068d43430ca98"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"}],"name":"buyTicket","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xd881a8a0"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyToken","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x057466ea"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"cancelSellNft","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x59f48271"},{"inputs":[{"internalType":"uint24","name":"_index","type":"uint24"}],"name":"getActiveEvents","outputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint56","name":"defaultPrice","type":"uint56"},{"internalType":"uint56","name":"minPrice","type":"uint56"},{"internalType":"uint56","name":"maxPrice","type":"uint56"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint24","name":"eventID","type":"uint24"}],"internalType":"struct PROXY.Evento[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3efdff5f"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getEventID","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function","constant":true,"signature":"0x2b43ecf6"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"}],"name":"getallTokensEvent","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa6ad1407"},{"inputs":[{"internalType":"uint24","name":"_eventId","type":"uint24"}],"name":"infoEvent","outputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint56","name":"defaultPrice","type":"uint56"},{"internalType":"uint56","name":"minPrice","type":"uint56"},{"internalType":"uint56","name":"maxPrice","type":"uint56"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint24","name":"eventID","type":"uint24"}],"internalType":"struct PROXY.Evento","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf73abefd"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"modifyErc20","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x190531fc"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"modifyErc721","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xff33878d"},{"inputs":[{"internalType":"uint24","name":"_maxTicket","type":"uint24"},{"internalType":"uint56","name":"_defaultPrice","type":"uint56"},{"internalType":"uint56","name":"_minPrice","type":"uint56"},{"internalType":"uint56","name":"_maxPrice","type":"uint56"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"bool","name":"_active","type":"bool"},{"internalType":"uint24","name":"_id","type":"uint24"}],"name":"modifyEvent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x759970e1"},{"inputs":[{"internalType":"uint24","name":"_maxTicket","type":"uint24"},{"internalType":"uint56","name":"_defaultPrice","type":"uint56"},{"internalType":"uint56","name":"_minPrice","type":"uint56"},{"internalType":"uint56","name":"_maxPrice","type":"uint56"},{"internalType":"string","name":"_name","type":"string"}],"name":"newEvent","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"nonpayable","type":"function","signature":"0xba4350c9"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint56","name":"_price","type":"uint56"}],"name":"sellNft","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf6c2f92c"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"setAdminNFTs","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5e5b7440"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ticketPrice","outputs":[{"internalType":"uint56","name":"","type":"uint56"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0d93e609"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"},{"internalType":"uint56","name":"price","type":"uint56"}],"name":"validPrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa85964a9"}]

let web3;
let account;
let proxyContract;
 
const events = [
    [5, 200000, 100000, 300000, "Duki"],
    [10, 200000, 100000, 300000, "Pikeras"],
    [20, 150000, 100000, 300000, "Tini"],
    [2, 100000, 100000, 300000, "Melendi"]
  ];
  

async function cargarCuenta(){
  const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  account = accounts[0];
  console.log(account);
  web3 = new Web3(window.ethereum);
  proxyContract = new web3.eth.Contract(abiProxy,data.addressContractProxy);

  for (let i = 0; i < 4; i++) {
    proxyContract.methods.newEvent(events[i][0],events[i][1],events[i][2],events[i][3],events[i][4]).send({ from: account }).then(res => {
        console.log(res);
    });
  }

  proxyContract.methods.getActiveEvents(0).send({ from: account }).then(res => {
    console.log(res);
  });
  
}

const button_create_event = document.querySelector('.button_create_event');
button_create_event.addEventListener('click', function() {
  cargarCuenta(); 
});

const init_proxy = document.querySelector('.init_proxy');
init_proxy.addEventListener('click', async function() {
  console.log('hola');
  const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  account = accounts[0];
  web3 = new Web3(window.ethereum);
  proxyContract = new web3.eth.Contract(abiProxy,data.addressContractProxy);
  proxyContract.methods.modifyErc20(data.addressContractERC20).send({ from: account }).then(res => {
    console.log(res);
  });

  proxyContract.methods.modifyErc721(data.addressContractERC721).send({ from: account }).then(res => {
    console.log(res);
  });
});
  






                                                             