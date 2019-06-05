
const MNEMONIC ="old gasp violin detect weasel mother buffalo daughter dizzy seed lunar lady"
const INFURA_KEY = "b2381ad1e21142eca350021467ba2a78"
const OWNER_ADDRESS = "0x1a4402e17aa645f9ea18aAaD9487678AB1550797"
const NFT_CONTRACT_ADDRESS = "0x97B3e13c0A424BFCd04999865ac864562f5470D4"
const NETWORK = 'rinkeby';

const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require('web3');
const NUM_TOKENS = 10;

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.");
    return;
}

const CONTRACT_ABI = require('./build/contracts/SolnSquareVerifier');
const NFT_ABI = CONTRACT_ABI.abi;

async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`);
    const web3Instance = new web3(
        provider
    );

    const nftContract = new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { gasLimit: "1000000" });

    // Tokens issued directly to the owner.
    for (var i = 0; i < NUM_TOKENS; i++) {
        try{

            const result = await nftContract.methods.mint(
            OWNER_ADDRESS,
            i
        ).send({ from: OWNER_ADDRESS });

        console.log("Minted token. Transaction: " + result.transactionHash);
        }catch(e){
            console.log(e)
        }
        
    }
}

main();