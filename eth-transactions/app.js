const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');

const url = 'https://ropsten.infura.io/v3/9508f614feda4aad8eeee34b61035de9';
const web3 = new Web3(url);

const account1 = '0xb96E4d50d04822E96dF7E11a888314B89DB9eBCB';
const account2 = '0xB00370F0ebdba2f7823e7E6282f5D5C8E87a2ce9';

const privateKey1Buffer = Buffer.from(process.env.PRIVATE_KEY_1, 'hex');
const privateKey2Buffer = Buffer.from(process.env.PRIVATE_KEY_2, 'hex');

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
  };
  // Sign the transaction
  const tx = new Tx(txObject, { chain: 'ropsten' });
  tx.sign(privateKey1Buffer);

  const serializedTransaction = tx.serialize();
  const raw = '0x' + serializedTransaction.toString('hex');

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash);
  });
});

// web3.eth.getBalance(account1, (err, bal) => {
//   console.log('Account 1 balance: ', web3.utils.fromWei(bal, 'ether'));
// });

// web3.eth.getBalance(account2, (err, bal) => {
//   console.log('Account 2 balance: ', web3.utils.fromWei(bal, 'ether'));
// });

// console.log(web3.eth.accounts.create())
// console.log(web3.eth.accounts.create())
// export PRIVATE_KEY_1=''
// export PRIVATE_KEY_2=''
// console.log(process.env.PRIVATE_KEY_1)
// console.log(process.env.PRIVATE_KEY_2)
