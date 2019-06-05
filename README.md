## Versions

Truffle v5.0.20 (core: 5.0.20)
Solidity v0.5.0 (solc-js)
Node v8.16.0
Web3.js v1.0.0-beta.37

## Install
```
git clone https://github.com/waldamegh/BlockchainCapstone.git
cd BlockchainCapstone
npm install
cd eth-contracts
```

## Testing

Start Ganache CLI in the terminal using

```
ganache-cli -m "old gasp violin detect weasel mother buffalo daughter dizzy seed lunar lady"
```

To run truffle tests:

```
truffle compile
truffle migrate
truffle test
```

### Rinkeby Deployment info

To deploy to rinkeby:
```
truffle migrate --network rinkeby
```
* The output:

```
2_deploy_contracts.js
=====================

   Deploying 'ERC721Mintable'
   --------------------------
   > transaction hash:    0x314142dcb4b4820a102bf7ee98367f68bab907956a2a01eee49f4ca900333432
   > Blocks: 2            Seconds: 21
   > contract address:    0x4610A0Dc04F627b0289925646975c93534D4134b
   > block number:        4506672
   > block timestamp:     1559729786
   > account:             0x1a4402e17aa645f9ea18aAaD9487678AB1550797
   > balance:             18.139658436
   > gas used:            3520792
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.073936632 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xa68b006cc34acc00b9f793cba137baa703e339befde264f1f600604b9da1cef5
   > Blocks: 1            Seconds: 9
   > contract address:    0x4E49aAE521F71F91Db635e19854f8B12426B589e
   > block number:        4506673
   > block timestamp:     1559729801
   > account:             0x1a4402e17aa645f9ea18aAaD9487678AB1550797
   > balance:             18.102394482
   > gas used:            1774474
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.037263954 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x6c3c27168cec9a6ae5fc0a8cbe0d589fcf55131e79c4a9f2991ed1b594abb983
   > Blocks: 1            Seconds: 17
   > contract address:    0x97B3e13c0A424BFCd04999865ac864562f5470D4
   > block number:        4506675
   > block timestamp:     1559729831
   > account:             0x1a4402e17aa645f9ea18aAaD9487678AB1550797
   > balance:             18.007711215
   > gas used:            4508727
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.094683267 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.205883853 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.211620255 ETH


```

## Minting Tokens

```
node mint.js
```
* output:
```
Minted token. Transaction: 0xbca6968aa17aba67ec21805ae78bd3aad2ddb3d563d41d91e1f8c370c7f91904
Minted token. Transaction: 0xf6cd40c075b9bb5999cd084af80ff3b2bbe682fefc7b5ac5e285eaa0fe701b56
Minted token. Transaction: 0xc67766e9cae9d24071685bd7697d3973e3512afd5872423982abc5de17c399bb
Minted token. Transaction: 0x3b17222acabc3ee0ea3430dcb9d1384800f35c14f1f785efa8668de08ac90e37
Minted token. Transaction: 0xd6b95c68add1c6450f5c3548691d4722bcbf64339cf0503d38a4aa177cfab957
Minted token. Transaction: 0x268223fbe8005790336552ea26d8192348e957705e3f1e134ba87748aaf4ff31
Minted token. Transaction: 0x8ee0b3a3b8e8eef164d99dc72b819c034097090807e7341326f165a8b6999a49
Minted token. Transaction: 0x89ba3299b7a44af5f56a707e9ec0cebc25068a761526c5f23aeec9cd157eae77
Minted token. Transaction: 0x57ad342fb560938c8fd4092651535b383fbbd441692b92734e110e9d26f6dc1b
Minted token. Transaction: 0x80c461bb8342809974469521ed6133191fd8aeaa2869bea6c8ba19e3e13ecc5f
```
## Open Sea account

* Users

```
https://rinkeby.opensea.io/accounts/0x1a4402e17aa645f9ea18aaad9487678ab1550797
https://rinkeby.opensea.io/accounts/0x91470d05545793df26d7a7d4cfb7f6fd65c37198
```
* Token

```
https://rinkeby.opensea.io/assets/0x97b3e13c0a424bfcd04999865ac864562f5470d4/0
https://rinkeby.opensea.io/assets/0x97b3e13c0a424bfcd04999865ac864562f5470d4/1
https://rinkeby.opensea.io/assets/0x97b3e13c0a424bfcd04999865ac864562f5470d4/2
https://rinkeby.opensea.io/assets/0x97b3e13c0a424bfcd04999865ac864562f5470d4/3
https://rinkeby.opensea.io/assets/0x97b3e13c0a424bfcd04999865ac864562f5470d4/4
https://rinkeby.opensea.io/assets/0x97b3e13c0a424bfcd04999865ac864562f5470d4/5
https://rinkeby.opensea.io/assets/0x97b3e13c0a424bfcd04999865ac864562f5470d4/6?
https://rinkeby.opensea.io/assets/0x97b3e13c0a424bfcd04999865ac864562f5470d4/7?
https://rinkeby.opensea.io/assets/0x97b3e13c0a424bfcd04999865ac864562f5470d4/8?
https://rinkeby.opensea.io/assets/0x97b3e13c0a424bfcd04999865ac864562f5470d4/9?

```

* sold Token
```
Token 0,1,2,3,4
Buyer address: 0x91470d05545793df26d7a7d4cfb7f6fd65c37198
```

### Zokrates Steps

```
docker run -v /home/wafa/BlockchainCapstone/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash
cd code/square
~/zokrates compile -i square.code
~/zokrates setup --proving-scheme pghr13
~/zokrates compute-witness -a 3 9
~/zokrates generate-proof --proving-scheme pghr13
~/zokrates export-verifier --proving-scheme pghr13
```
update existing Verifier.sol in eth-contracts/contracts with the newly generated - - Verifier.sol under zokrates/code/square
Then, delete the existing build folder and recompile the project


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
