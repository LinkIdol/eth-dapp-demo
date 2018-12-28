import { BigNumber } from 'bignumber.js';
import web3 from './web3';
import abi from './abi.js';
import Promise from 'bluebird';


const saleClockAuction = web3.eth.contract(abi.saleClockAuction.abi).at(abi.saleClockAuction.address);
const kittyCore = web3.eth.contract(abi.kittyCore.abi).at(abi.kittyCore.address);
console.log(saleClockAuction, 'cryptoWaterMarginContract')
export const buyItem = (id, price) => new Promise((resolve, reject) => {
  saleClockAuction.bid(id, {
    value: price, // web3.toWei(Number(price), 'ether'),
    gas: 220000,
    gasPrice: 1000000000 * 100,
  },
  (err, result) => (err ? reject(err) : resolve(result)));
});

export const action = (id, startpic, endPic, duration) => new Promise((resolve, reject) => {
  kittyCore.createSaleAuction(id, startpic, endPic, duration, {
    gas: 220000,
    gasPrice: 1000000000 * 100,
  }, (err, result) => (err ? reject(err) : resolve(result)));
})

export const getOwner = () => Promise.promisify(saleClockAuction.owner)()

