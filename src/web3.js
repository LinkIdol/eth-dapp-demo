import Web3 from 'web3';

const web3Provider = window.web3 ? window.web3.currentProvider : null;

const web3 = web3Provider
  ? new Web3(web3Provider)
  : new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/d5686d6d07d0421eb166c521250af71b'));

web3.eth.defaultAccount = web3.eth.accounts[0];

export default web3;