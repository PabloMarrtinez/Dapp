var data;

async function obtenerDatos () {
  const respuesta = await fetch('../vars/var.json');
  data = await respuesta.json();

};

obtenerDatos();


const abi = [];


let web3;
let account;
let proxyContract;


function init() {
    if (typeof window.ethereum !== 'undefined') {
        const metamaskBtn = document.getElementById('enableEthereumButton');
        metamaskBtn.classList.remove('d-none');
        metamaskBtn.addEventListener('click', async() => {
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            account = accounts[0];

            metamaskBtn.classList.add('d-none');
            document.getElementById('accountSelected').innerHTML = account;
            cocument.getElementById('accountSelected').classList.add('border');

            detectChangeAccount();
            contract();

            document.getElementById('login').style.display = 'none';
            document.getElementById('main').classList.remove('d-none');

        });

    }
}

function detectChangeAccount(){
    window.ethereum.on('accountsChanged', function(accounts){
        console.log(accounts);
        account = accounts[0];
        document.getElementById('accountSelected').innerHTML = account;
    })
}

function contract() {
    web3 = new Web3(window.ethereum);
    proxyContract = new web3.eth.Contract(abi,addressContractProxy);
    interact();
}

function interact(){

    const btnGetBalance = document.getElementById('btnGetBalance');
    btnGetBalance.addEventListener('click', () => {
        const address = document.getElementById('addressGetBalance');
        const value = address. value;

        proxyContract.methods. balanceOf(value).call().then(res => {
            const amount = web3. utils.fromWei(res, 'ether');
            const valueSpan = document.getElementById('balance');
            valueSpan. innerHTML = amount;
        });
    });

    const transfer = document.getElementById('transferir');
    transfer.addEventListener('click', () => {
        const address = document.getElementById('addressBenefiaria');
        const addressValue = address.value;
        const amount = document.getElementById('cantidad');
        const amountString = amount. value. toString();
        const amountTransfer = web3.utils.  towei(amountString, 'ether');

        proxyContract.methods.transfer(addressValue, amountTransfer).send({ from: account }).then(res => {
            address. value = '';
            amount.value = 0;

        });
    });

                

}

window.onload = init();
                                                             