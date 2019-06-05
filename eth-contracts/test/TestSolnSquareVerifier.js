var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');

var proof = {
	"proof":
	{
		"A":["0x083d3ed3654af61f579e30bdd56c73bcfaa4057c799bf323be406f34abe79017", "0x2526e1cd8fa55053f54a06454028754f93bcbf62f677eee4fa118fa257114b09"],
		"A_p":["0x0b3d8b5ec80b7db4f07cf35870989ec8bbe5d4b029fca2bfe1d5f2d2603253a7", "0x29657ab34c6dee46dc0c5d629ee22ea2d575a51820efe44d75641eb4f664f366"],
		"B":
			[["0x09226b6a72bb13af0393dc5709388f92d0e4d13cfe8369231e8ed736ffe69f7f", "0x163d8d70f2a91d42d27194af1d2a044d3d15a9a7aeb951b419353644f777ee4e"], ["0x2cf609322cc0e1cb3c084be7e8de209d443775464122519687ce702bb68dd4bd", "0x2e1db0a1b0e04f2ca7e9769ec55208b4952b90211b43965e623969483cc2b5b9"]],
		
		"B_p":["0x261ba6ce06fa364865eaccea06cca1bdf2dc92e8e8fe77565f883925b77894b6", "0x1d9f22c6506c9235bb5c9cf19e3b8db9b6f6ba0d351e61d2d45003e40af03eca"],
		"C":["0x1860c08766fded3d828f23dc89d19f4dd47b8b715e6724fce2b0da921ff60617", "0x0d989a41a8ca9f6a3f93670ae6f3ab9b1790f7b5b41caf96fa0f91c7b99e0584"],
		"C_p":["0x0cbfce248d96a6f105017b5798b119b83c3aa9a8d20fcbe9f6b2da96f2747731", "0x19393bbe9d91cb3ca7a13c370a80478c32b1b73f62b76cdec3f9f0e5f3816ab7"],
		"H":["0x2c91b709eb2a4958e9be2400c95a2a5135bc0d01c5ea2f3d8aaca3b7a35f298e", "0x1f6ef3629f1bb68f4eb57d8923cae07efb12b93b8a6c2b51bab40a1729fb8a43"],
		"K":["0x1e00ae0edf1a93b0bee2403bd6f54106d5a876e8fbb195f2e5ed44d99769c532", "0x2b92b925c26a0c9741169f91208c64728d86890ee43d908c55284bfb190739ab"]
	},
	"input":[9,1]
};

contract('SolnSquareVerifier', accounts => {
    const account1 = accounts[0];
    const account2 = accounts[1];
    
    const A = proof["proof"]["A"];
    const A_p = proof["proof"]["A_p"];
    const B = proof["proof"]["B"];
    const B_p = proof["proof"]["B_p"];
    const C = proof["proof"]["C"];
    const C_p = proof["proof"]["C_p"];
    const H = proof["proof"]["H"];
    const K = proof["proof"]["K"];
    const correctProofInput = proof["input"];

    describe('Test SolnSquareVerifier:', function () {
        beforeEach(async function () {
        	const verifier = await Verifier.new({from: account1});
            this.contract = await SolnSquareVerifier.new(verifier.address, {from: account1});
        });
        // Test if an ERC721 token can be minted for contract and a new solution can be added for contract - SolnSquareVerifier
        it('Test1: ERC721 token can be minted for contract a new solution can be added for contract', async function () {
            await this.contract.mintNFT(account2, 2, A, A_p, B, B_p, C, C_p, H, K, correctProofInput, {from: account1});
            let owner = await this.contract.ownerOf(2);
            let totalSupply = await this.contract.totalSupply();

            assert.equal(account2, owner, "Token owner has not set to account (2)");
            assert.equal(totalSupply, 1, "Total supply has not been incremented");
        });
        // Test if an already existing solution can not be added for contract - SolnSquareVerifier
        it('Test2: an already existing solution can not be added for contract', async function () {  
            let isAlreadyAdded = false;
            try{
                await this.contract.addSolution(account2, 2, A, A_p, B, B_p, C, C_p, H, K, correctProofInput);
                await this.contract.addSolution(account2, 2, A, A_p, B, B_p, C, C_p, H, K, correctProofInput); 
            } catch(e) {
                isAlreadyAdded = true;
            }
            assert.equal(isAlreadyAdded, true, "Minting with the same solution not added");
         });
    });

})