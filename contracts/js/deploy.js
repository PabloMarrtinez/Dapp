const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abiErc20, bytecodeErc20, abiErc721, bytecodeErc721, abiPROXY, bytecodePROXY } = require('./compile');


// export NODE_OPTIONS=--openssl-legacy-provider

const mnemonic = 'public silly truly ozone still tool click false affair stay dish island';
const provider = new HDWalletProvider(mnemonic, 'http://127.0.0.1:8545');

const web3 = new Web3(provider);

const deploy = async () => {
    const account = await web3.eth.getAccounts();

    // Calculo del gas estimado antes de hacer el deploy de proxy
    const gasEstimateProxy =  await new web3.eth.Contract(abiPROXY).deploy({data: bytecodePROXY}).estimateGas({from: account[0]});

    const resultProxy =  await new web3.eth.Contract(abiPROXY).deploy({data: bytecodePROXY}).send({ gas: gasEstimateProxy, from: account[0]});
    // Almaceno la dirección donde se ha hecho deploy del contrato proxy
    const addresProxy = [resultProxy.options.address];

    // Calculo el fee para el resto de deploys
    const gasEstimateERC20 =  await new web3.eth.Contract(abiErc20).deploy({data: bytecodeErc20, arguments: addresProxy}).estimateGas({from: account[0]});
    const gasEstimateERC721 =  await new web3.eth.Contract(abiErc721).deploy({data: bytecodeErc721, arguments: addresProxy}).estimateGas({from: account[0]});


    const resultERC20 =  await new web3.eth.Contract(abiErc20).deploy({data: bytecodeErc20, arguments: addresProxy}).send({ gas: gasEstimateERC20, from: account[0]});
    const resultERC721 =  await new web3.eth.Contract(abiErc721).deploy({data: bytecodeErc721, arguments: addresProxy}).send({ gas: gasEstimateERC721, from: account[0]});

    console.log("\"addressContractProxy\": \""+resultProxy.options.address+"\",");
    console.log("\"addressContractERC20\": \""+resultERC20.options.address+"\",");
    console.log("\"addressContractERC721\": \""+resultERC721.options.address+"\"");

    console.log("abi ERC20: "+JSON.stringify(resultERC20.options.jsonInterface));
    console.log();console.log();
    console.log("abi ERC721: "+JSON.stringify(resultERC721.options.jsonInterface));
    console.log();console.log();
    console.log("abi PROXY: "+JSON.stringify(resultProxy.options.jsonInterface));

    

};

deploy();