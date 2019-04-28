# Truffle, Metamask, & Remix Tutorial  -  Simple Voting Contact


In this tutorial we will be making a really simple Ethereum smart contract, which allows accounts to make a yes or no vote and tracks the results.

We will be creating a new truffle project in order to do this, and we will deploy the contract to the Ropsten test net using Remix.


## Truffle

Truffle is your dev pack for quick-start programming with Ethereum.

https://truffleframework.com/


##### Install truffle

```
npx install -g truffle
```

##### Create a new truffle project

```
mkdir metamask-truffle-remix-tutorial
cd metamask-truffle-remix-tutorial
npx truffle init
```

##### Simple Voting Contract

Here is the smart contract: [./contracts/SimpleVoter.sol](./contracts/SimpleVoter.sol)

##### Writing a test

...

##### Start a Ganache test blockchain and run the test

...


## Deploy using Remix and Metamask


### Metamask 

Metamask is a plugin for the Google Chrome browser (and the Brave browser) which is an Ethereum wallet.       
It holds your private keys for you in a secure way, and connects to the Ethereum blockchain when you want to send a transaction (including creating or accessing a smart contract).

https://metamask.io/

Your ethereum dApps need to access the ethereum chain, just like a traditional app accesses a database.   
There needs to be a node that allows your app to connect to it.    
Metamask is able to connect to the etherum chain by making use of the Infura (https://infura.io/) service, which is mainnet and testnet ethereum nodes that allow for public connections.


### Remix

Remix is an online IDE for Ethereum smart contract development and deployment.     
It includes a generic UI that lets you call any methods on a deployed smart contract.    
It is the most straight forward tool available for putting a smart contract onto the Ethereum mainnet or testnet.

##### Steps to deploy using Remix/Metamask

...



## References 

* https://truffleframework.com/tutorials/getting-started-with-drizzle-and-react
* https://github.com/krisrandall/EthereumSimpleVoter
