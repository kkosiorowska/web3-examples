const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');

const url = 'https://ropsten.infura.io/v3/9508f614feda4aad8eeee34b61035de9';
const web3 = new Web3(url);

const account1 = '0xb96E4d50d04822E96dF7E11a888314B89DB9eBCB';

const privateKey1Buffer = Buffer.from(process.env.PRIVATE_KEY_1, 'hex');

const contractABI = [];
const contractAddress = '0xB95A8471F4312792E99745AfAE46363CAD41A52c';
var dapptokenContract = new web3.eth.Contract(contractABI, contractAddress);

// dapptokenContract.methods.name().call((err, result) => {
//   console.log(err);
//   console.log(result);
// });

// web3.eth.getTransactionCount(account1, (err, txCount) => {
//   // Smart contract data
//   const data = '0x';
//   // Build the transaction
//   const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     gasLimit: web3.utils.toHex(1000000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//     data: data,
//   };
//   // Sign the transaction
//   const tx = new Tx(txObject, { chain: 'ropsten' });
//   tx.sign(privateKey1Buffer);

//   const serializedTransaction = tx.serialize();
//   const raw = '0x' + serializedTransaction.toString('hex');

//   // Broadcast the transaction
//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log('err:', err);
//     console.log('txHash:', txHash);
//   });
// });
