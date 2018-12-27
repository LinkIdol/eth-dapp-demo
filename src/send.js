import { BigNumber } from 'bignumber.js';
import web3 from './web3';
import abi from './abi.js';
import Promise from 'bluebird';


const cryptoWaterMarginContract = web3.eth.contract(abi.abi).at('0xDE33cc4D5be256763d99bAaF5f1eF61196352127');
console.log(web3, cryptoWaterMarginContract)
export const buyItem = (id, price) => new Promise((resolve, reject) => {
  cryptoWaterMarginContract.bid(id, {
    value: price, // web3.toWei(Number(price), 'ether'),
    gas: 220000,
    gasPrice: 1000000000 * 100,
  },
  (err, result) => (err ? reject(err) : resolve(result)));
});

export const getOwner = () => Promise.promisify(cryptoWaterMarginContract.owner)()

