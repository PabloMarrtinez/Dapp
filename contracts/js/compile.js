const path = require('path');   // Utilizar rutas
const fs = require('fs');       // Leer el código de los contratos
const solc = require('solc');   // Compilar el código leido por fs en bytecode


// Cargo la ruta de los ficheros
const pathERC20 = path.join(__dirname,'../ERC-20/ERC20.sol');
const pathERC721 = path.join(__dirname,'../ERC-721/ERC721.sol');
const pathPROXY = path.join(__dirname,'../proxy/PROXY.sol');


// Leo los código
const codeERC2O = fs.readFileSync(pathERC20,'utf8');
const codeERC721 = fs.readFileSync(pathERC721,'utf8');
const codePROXY = fs.readFileSync(pathPROXY,'utf8');

// Ejecuto los códigos
const inputERC20 = {
    language: 'Solidity',
    sources: {
        'ERC20.sol': {
            content: codeERC2O
        }
    },
    settings: {
        outputSelection: {
                '*':{
                    '*':['*']
                }
        }
    }


};

const inputERC721 = {
    language: 'Solidity',
    sources: {
        'ERC721.sol': {
            content: codeERC721
        }
    },
    settings: {
        outputSelection: {
                '*':{
                    '*':['*']
                }
        }
    }


};

const inputPROXY = {
    language: 'Solidity',
    sources: {
        'PROXY.sol': {
            content: codePROXY
        }
    },
    settings: {
        outputSelection: {
                '*':{
                    '*':['*']
                }
        }
    }


};

// Resultado de la compilación

const outputERC20 = JSON.parse(solc.compile(JSON.stringify(inputERC20)));
const outputERC721 = JSON.parse(solc.compile(JSON.stringify(inputERC721)));
const outputPROXY = JSON.parse(solc.compile(JSON.stringify(inputPROXY)));

console.log(outputERC20);
console.log(outputERC721);
console.log(outputPROXY);

module.exports = {
    abiErc20: outputERC20.contracts['ERC20.sol'].ERC20.abi,
    bytecodeErc20: outputERC20.contracts['ERC20.sol'].ERC20.evm.bytecode.object,
    abiErc721: outputERC721.contracts['ERC721.sol'].ERC721.abi,
    bytecodeErc721: outputERC721.contracts['ERC721.sol'].ERC721.evm.bytecode.object,
    abiPROXY: outputPROXY.contracts['PROXY.sol'].PROXY.abi,
    bytecodePROXY: outputPROXY.contracts['PROXY.sol'].PROXY.evm.bytecode.object
}

