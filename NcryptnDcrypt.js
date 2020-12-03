const EthCrypto = require('eth-crypto');

cont user = EthCrypto.createIdentity;
//enter the first password for the 
const FirstLevelPassword = prompt("Enter the first password");
const JSON = JSON.stringify(passwords);
const encrypted = await EthCrypto.encryptWithPublicKey(user.publicKey, passwords);
const ciphertext = encryptedJson.cipher;
const buffer = Buffer.from(cipherText);

const decrypted = await EthCrypto.decryptWithPrivateKey(user.privateKey, passwords)

Window.web3 = new Web3(ethereum);
await ethereum.enable;
//see if theres metamask accounts
const accounts = await web3.eth.getAccounts();
 if (accounts.length === 0) {
     alert ("User doesnt have any accounts please make one first");
 }  else {
         alert ("account found starting application now");
     }
const contract = new web3.eth.contract{
    password-mngr.address;
    password-mngr.abi;
}