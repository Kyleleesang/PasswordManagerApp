//Initialize metamask and Web3
function AppInitialize() { 
//check if theres a window
if (window.ethereum){
    web3 = new Web3(window.ethereum);
await ethereum.enable();
//if its an old version of metamask this is the way to do it
} else if (window.web3){
    web3 - new Web3(window.web3.currentProvider);
//set web 3 provider to your own computer
} else {
    const provider = new Web3.providers.HttpProvider('http://localhost:8545');
    const web3 = new Web3(provider);
}//get the metamask accounts
const accounts = await Web3.eth.getAccounts();
const networkID = await web3.eth.net.getId();
}


function createNewPassword(){
accountName = prompt("Enter the name of the account/service/site:", '');
thePassword = prompt("Enter the password for the account/service/site:", '');
entry = {name: accountName, password : thePassword };
return JSON.stringify(entry);
}


function SendHash() {
    await ipfs.add(buffer (error,result)) => {
    if(error) {
        alert('Error when loading file to Ipfs: ${error}');
        return;
    };
    const IPFShash = result[0].hash;
    contract.methods.SendHash(IPFShash).send({from:ethAccount},(error, transactionHash) => {
        this.setState({transactionHash, IPFShash});
    });
  }
}



function LoadPasswords() { 
const MasterPassword = prompt("Please enter the Master Password", '');
//hash the masterpassword with the private key
const MasterPasswordHash = await EthCrypto.encryptWithPublicKey(MasterPassword);
//compare the hashed master password with the one stored on the blockchain
const MasterHashed = await contract.methods.ViewMasterHash().call;
 if (MasterPasswordHash != MasterHashed) {
    alert("You entered in the wrong password");
 } else {
//get the ipfs file
const ipfshash = await contract.methods.getHash().call();
//get the file
const passwordFile = await ipfs.get(ipfshash);
//get the buffer
const ipfsBuffer = new Buffer(files[0].content);
const encryptedFile =  ipfsBuffer.toString();
//decrypt it
const decryptedFile = EthCrypto.decryptWithPrivateKey(encryptedFile);
const passwords = JSON.parse(decryptedFile.plaintext); 
return passwords;
 }
}
//for react
//this.ListeningStateChangedEvent({ipfsHash, passwords: passwords});