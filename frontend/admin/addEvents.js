const addressContractProxy = '0xFE840e487527Bb9516Be60118C30064a94fc8EA1';

const abiProxy = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint16","name":"defaultPrice","type":"uint16"},{"internalType":"uint16","name":"minPrice","type":"uint16"},{"internalType":"uint16","name":"maxPrice","type":"uint16"},{"internalType":"string","name":"name","type":"string"}],"indexed":false,"internalType":"struct PROXY.Evento","name":"_e","type":"tuple"}],"name":"EventSoldOut","type":"event","signature":"0xc2249fb9a863916c23b7b54ebb4d9cc024adce31cd69630800e9f63a636795fc"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint16","name":"defaultPrice","type":"uint16"},{"internalType":"uint16","name":"minPrice","type":"uint16"},{"internalType":"uint16","name":"maxPrice","type":"uint16"},{"internalType":"string","name":"name","type":"string"}],"indexed":false,"internalType":"struct PROXY.Evento","name":"_e","type":"tuple"}],"name":"NewEvent","type":"event","signature":"0xf1f8f882776e539806fe72d12dfb907fe16056912ffe499a2083c6079cf7b959"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"}],"name":"buyTicket","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xd881a8a0"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"buyToken","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x057466ea"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"cancelSellNft","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x59f48271"},{"inputs":[{"internalType":"uint24","name":"_index","type":"uint24"}],"name":"getActiveEvents","outputs":[{"components":[{"internalType":"uint24","name":"maxTicket","type":"uint24"},{"internalType":"uint24","name":"lastTicket","type":"uint24"},{"internalType":"bool","name":"soldOut","type":"bool"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint16","name":"defaultPrice","type":"uint16"},{"internalType":"uint16","name":"minPrice","type":"uint16"},{"internalType":"uint16","name":"maxPrice","type":"uint16"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct PROXY.Evento[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3efdff5f"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getEventID","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"pure","type":"function","constant":true,"signature":"0x2b43ecf6"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"}],"name":"getallTokensEvent","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa6ad1407"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"modifyErc20","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x190531fc"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"modifyErc721","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xff33878d"},{"inputs":[{"internalType":"uint24","name":"_maxTicket","type":"uint24"},{"internalType":"uint16","name":"_defaultPrice","type":"uint16"},{"internalType":"uint16","name":"_minPrice","type":"uint16"},{"internalType":"uint16","name":"_maxPrice","type":"uint16"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"bool","name":"_active","type":"bool"},{"internalType":"uint24","name":"_id","type":"uint24"}],"name":"modifyEvent","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xbbe51e8a"},{"inputs":[{"internalType":"uint24","name":"_maxTicket","type":"uint24"},{"internalType":"uint16","name":"_defaultPrice","type":"uint16"},{"internalType":"uint16","name":"_minPrice","type":"uint16"},{"internalType":"uint16","name":"_maxPrice","type":"uint16"},{"internalType":"string","name":"_name","type":"string"}],"name":"newEvent","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"nonpayable","type":"function","signature":"0xd2a23a96"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint16","name":"_price","type":"uint16"}],"name":"sellNft","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xfecd0a16"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"setAdminNFTs","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5e5b7440"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ticketPrice","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x0d93e609"},{"inputs":[{"internalType":"uint24","name":"_eventID","type":"uint24"},{"internalType":"uint24","name":"price","type":"uint24"}],"name":"validPrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x682e28e7"}];


let web3;
let account;
let proxyContract;
 
const events = [
    [5, 20, 10, 30, "Duki"],
    [10, 20, 10, 30, "Pikeras"],
    [20, 20, 10, 30, "Tini"],
    [2, 10, 10, 30, "Melendi"]
  ];
  

async function cargarCuenta(){
  const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  account = accounts[0];
  console.log(account);
  web3 = new Web3(window.ethereum);
  proxyContract = new web3.eth.Contract(abiProxy,addressContractProxy);

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









                                                             