import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from 'walletlink';
import Fortmatic from 'fortmatic';
import Portis from '@portis/web3';
import Torus from "@toruslabs/torus-embed";
import Authereum from 'authereum'

var web3;

var accounts = [];
var connected = false;

var TrezorConnect = require('trezor-connect').default;

//  Create WalletConnect Provider
document.addEventListener('DOMContentLoaded', () => {

  const anim = document.getElementById('anim');
  const box = document.getElementById('box');
  var display = false;
  const connect = document.getElementById('connect');
  connect.addEventListener('click', e => {
    e.stopPropagation();
    anim.classList.add('animation');
    box.style.display = 'flex';
    connect.style.display = 'none';
    display = true;
  });
    anim.addEventListener('click', e => {
      if(display = true){
    e.stopPropagation();
      }
  });
  document.addEventListener('click', () => {
    if(display = true){
    anim.classList.remove('animation');
    box.style.display = 'none';
    connect.style.display = 'inline-block'
    display = false;
    }
  });

  const metaMask = document.getElementById('metaMask');

  metaMask.addEventListener('click', e => {
    if(connected == false){
      async function my(){
      if(typeof window.ethereum !== 'undefined') {
          web3 = new Web3(window.ethereum);
          window.ethereum.enable();
          console.log(web3);
      }
      else {
          console.log('Please install MetaMask!');
        }
      }
      my();
      address();
    }
  });

  const trust = document.getElementById('trust');
  trust.addEventListener('click', e => {
    if(connected = false){

    async function my(){
      if(typeof window.ethereum !== 'undefined') {
        await window.ethereum.enable();
        web3 = new Web3(window.ethereum);
        connected = true;
   }
   else {
       console.log('Please install Trust wallet!');
     }
    }
    my();
    address();
  }  
  })

  const coinbase = document.getElementById('coinbase');
  coinbase.addEventListener('click', () => {
    if(connected == false){
      const APP_NAME = 'My Awesome App'
    const APP_LOGO_URL = 'data:image/jpeg;base64,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'
    const ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/553180fcfdb941ef883b5b46904261ea'
    const CHAIN_ID = 1

// Initialize WalletLink
 const walletLink = new WalletLink({
appName: APP_NAME,
appLogoUrl: APP_LOGO_URL,
darkMode: false
})

// Initialize a Web3 Provider object
 const ethereum = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID)

// Initialize a Web3 object
web3 = new Web3(ethereum);

 ethereum.send('eth_requestAccounts').then((accounts) => {
  console.log(`User's address is ${accounts[0]}`)

  // Optionally, have the default account set for web3.js
  web3.eth.defaultAccount = accounts[0]
  address();
})

// Alternatively, you can use ethereum.enable()
ethereum.enable().then((accounts) => {
  console.log(`User's address is ${accounts[0]}`)
  web3.eth.defaultAccount = accounts[0];
})
  connected = true;
    }
    
  })
   const connect1 = document.getElementById('connect1');
   connect1.addEventListener('click', () => {
    if(connected == false){
      async function my(){
    const provider = new WalletConnectProvider({
      infuraId: '553180fcfdb941ef883b5b46904261ea'
    });
  //  Enable session (triggers QR Code modal)
  await provider.enable();
  
  //  Create Web3
  web3 = new Web3(provider);
    console.log(web3.eth.getAccounts());
  connected = true;
      }
      my();
      address();
    }
   })

   const trezor = document.getElementById('trezor');
   trezor.addEventListener('click', () => {
    if(connected == false){

    window.__TREZOR_CONNECT_SRC = 'https://localhost:7545/';
    }
   })

   const formatic = document.getElementById('formatic');
   formatic.addEventListener('click',  () => {
    if(connected == false){
     async function my(){
  const fm = new Fortmatic('pk_test_C2506FD3A46D67E4', 'kovan');
  // web3.currentProvider.enable();
  window.web3 = new Web3(fm.getProvider());
  connected = true;
     }
     my();
     address();
     }
   })
  const portis = document.getElementById('portis');
  portis.addEventListener('click', () => {
    if(connected == false){
    async function my(){
    const portis = new Portis('36a0fdbe-bb52-42d6-805a-b5cb95f3c8d1', 'mainnet');
    portis.showPortis();
    web3 = new Web3(portis.provider);
    connected = true;
    }
    my();
    address();
  }
  }) 
const squarelink = document.getElementById('squarelink');
squarelink.addEventListener('click', () => {
  if(connected == false){
  async function my(){
  const sqlk = new Squarelink('7b521cce4c021b59c430');
  sqlk.getProvider((provider, err) => {
     web3 = new Web3(provider);
    if(err){
      console.log(err)
    }
    console.log(web3)
  
    // Use standard Web3 methods as you normally would
    web3.currentProvider.enable().then(console.log);
    connected == true;
  })
}

my();
address();
  }
})

const taurus = document.getElementById('tauras');
taurus.addEventListener('click', () => {
  if(connected == false){
  async function start(){
  const torus = new Torus({
    buttonPosition: "top-left" // default: bottom-left
  }); 
    await torus.init({
    buildEnv: "production", // default: production
    enableLogging: false, // default: false
    network: {
      host: "mainnet", // default: mainnet
      chainId: 1, // default: 1
      networkName: "Mainnet" // default: Main Ethereum Network
    },
    showTorusButton: false // default: true
  });
  await torus.login(); // await torus.ethereum.enable()
  await torusInit();
  await torusLogin();
  web3 = new Web3(torus.provider);
  connected = true;
}
start();
  }
});

const athereum = document.getElementById('athereum');
athereum.addEventListener('click', () => {
  if(connected == false){
  async function my(){

  const authereum = new Authereum({
    networkName: 'mainnet',
    apikey: '30e065729d24445d9cef9406983ed0ae'
  })
const provider = authereum.getProvider()
provider.enable();
web3 = new Web3(provider)
connected = true;
  }
  my();
  address();
}
})

const deactivate = document.getElementById('deactivate');
deactivate.addEventListener('click', () => {
  web3 = ''
})

const info = document.getElementById('info');
info.addEventListener('click', () => {
  info.style.display = 'none';
  anim.style.display = 'flex';
  connect.style.display = 'none';
})

async function address(){
  connected = false;
  anim.style.display = 'none';
  connect.style.display = 'none';
  // const info = document.getElementById('info');
  info.style.display = 'flex';
  await web3.eth.getAccounts().then(_accounts => {
    accounts = _accounts
  });
  const address = document.getElementById('address');
  address.innerHTML = accounts[0];
}
})