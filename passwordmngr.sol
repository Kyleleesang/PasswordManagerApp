pragma solidity ^0.5.0;

contract Passwords {
    address public owner;
    string  HashedPasswords;
    constructor() public {
        passwordOwner = msg.sender
    }

// sets the current hash of all the passwords in the JSON file to the hash set
//this works for changing all the passwords in the database
function SendHash (string hash) public {
    assert(msg.sender == owner);
    hashedPasswords = hash
}

// view is so that it cost less gas and doesnt change any info
function GetHash (string hash) public view returns (string hash){
    assert (msg.sender == owner); 
    return HashedPasswords;
}

}