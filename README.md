# Truffle, MetaMask & Remix Tutorial  -  Simple Voting Contract


In this tutorial we will be making a really simple Ethereum smart contract, which allows accounts to make a yes or no vote and tracks the results.

We will be creating a new Truffle project in order to do this, we will also create some tests for the smart contract, and we will then deploy the contract to the Ropsten testnet using Remix.


## Developing and testing a smart contract with Truffle and Ganache

### Truffle

Truffle is your dev pack for quick-start programming with Ethereum.

https://truffleframework.com/


##### Install truffle

```
npm install -g truffle
```

##### Create a new Truffle project 

```
mkdir metamask-truffle-remix-tutorial
cd metamask-truffle-remix-tutorial
npx truffle init
```
#### OR clone this repo

```
git clone git@github.com:krisrandall/metamask-truffle-remix-tutorial.git
cd metamask-truffle-remix-tutorial
```

##### Simple Voting Contract

Here is the smart contract: [./contracts/SimpleVoter.sol](./contracts/SimpleVoter.sol)


##### Writing a test

The Truffle framework also allows creating Javascript tests for your smart contracts.

See [./test/test-simple-voter.js](./test/test-simple-voter.js)


##### Ganache

For your dApps to run, they must connect to a blockchain.    
For development and testing you will want to have a "test" blockchin which runs on your machine.     
Ganache is an easy to use test blockchain.     

Install Ganache now : https://truffleframework.com/ganache


##### Start a Ganache test blockchain and run the test

To run your tests you must first start the Ganache test chain.

Then run all your tests using :

```
truffle test
```


## Deploy using Remix and MetaMask

Now lets look at deploying our smart contract to the Ethereum testnet.

Your Ethereum dApps need to access the Ethereum chain, just like a traditional app accesses a database.   
There needs to be a node that allows your app to connect to it.    
MetaMask is able to connect to the Ethereum chain by making use of the Infura (https://infura.io/) service, which is mainnet and testnet Ethereum nodes that allow for public connections.


### MetaMask 

MetaMask is a plugin for the Google Chrome browser (and the Brave browser) which is an Ethereum wallet.       
It holds your private keys for you in a secure way, and connects to the Ethereum blockchain when you want to send a transaction (including creating or accessing a smart contract).

https://MetaMask.io/


### Remix

Remix is an online IDE for Ethereum smart contract development and deployment.     
It includes a generic UI that lets you call any methods on a deployed smart contract.    
It is the most straight forward tool available for putting a smart contract onto the Ethereum mainnet or testnet.


#### Steps to deploy to Ropsten Test Network using Remix/MetaMask

1. Open Remix (https://remix.ethereum.org)
2. Paste the code from [./contracts/SimpleVoter.sol](./contracts/SimpleVoter.sol) into the code window
3. Click *Compile > Start* to compile
4. Unlock MetaMask
5. In MetaMask use *Deposit > Get Ether > request 1 ether from faucet* (in order to get some ether for gas)
6. Wait a moment (~ 15 seconds) for the ether to appear in your MetaMask balance 
7. Click *Run > Deploy* in Remix, and click *Confirm* in the MetaMask popup
8. Wait a moment (~ 15 seconds) for the contract to be deployed
9. Remix will then show a *"Deployed Contracts"* box in the bottom right which can be interacted with to cast a (*true* or *false*) vote, and also to see the number of yeses and nos

##### A public smart contract available to all

If you keep track of your contract address from step 8 above, and share that and the ABI with someone else then they can also interact (vote) with your smart contract.  (seee https://github.com/krisrandall/EthereumSimpleVoter for steps to do that).

##### Etherscan

In Remix it will show you the links to the transactions in etherscan for your deployment (in step 8) and for any votes you cast (in step 9).  Etherscan is an independent node that allows a form of convenient proof to the internet public of Ethereum transactions that have occured, and it conveniently also supports the rosten test network.

## References 

* https://truffleframework.com/tutorials/getting-started-with-drizzle-and-react
* https://github.com/krisrandall/EthereumSimpleVoter
* https://truffleframework.com/docs/truffle/testing/testing-your-contracts
* https://remix.ethereum.org
* https://MetaMask.io/

-----


# More info / A final note about dApps

A dApp is a blockchain application.    
That usually means a smart contract (or many smart contract) and some UI code; usually a web app.
In this tutorial we have only looked at writing, testing, and deploying a smart contract.    

To learn about creating the frontend, and creating a full dApp, check out the truffle tutorials : https://truffleframework.com/tutorials

Especially recommended for your first dApp is : https://truffleframework.com/tutorials/pet-shop    

To learn about making a react/redux dApp see : https://truffleframework.com/tutorials/getting-started-with-drizzle-and-react

To learn more about Ethereum, checkout : https://truffleframework.com/tutorials/ethereum-overview
