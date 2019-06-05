var ERC721Mintable = artifacts.require('ERC721Mintable');

contract('ERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await ERC721Mintable.new({ from: account_one });

            // TODO: mint multiple tokens
            let mintToken1 = await this.contract.mint(account_one, 1, { from: account_one });
            let mintToken2 = await this.contract.mint(account_one, 2, { from: account_one });
            let mintToken3 = await this.contract.mint(account_one, 3, { from: account_one });
            let mintToken4 = await this.contract.mint(account_one, 4, { from: account_one });
        })

        it('should return total supply', async function () {
            let result = await this.contract.totalSupply();
            assert.equal(result, 4, "Total number of minted tokens is incorrect!");
        })

        it('should get token balance', async function () {
            let account1Balance = await this.contract.balanceOf(account_one);
            let account2Balance = await this.contract.balanceOf(account_two);
            assert.equal(account1Balance, 4, "Token balance of account (1) is incorrect!");
            assert.equal(account2Balance, 0, "Token balance of account (2) is incorrect!");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let tokenURI = await this.contract.tokenURI(1);
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Token URI is not found!")
        })

        it('should transfer token from one owner to another', async function () {
            await this.contract.transferFrom(account_one, account_two, 2, { from: account_one });
            let newOwner = await this.contract.ownerOf(2);
            assert.equal(newOwner, account_two, "Token owner does not changed!!");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721Mintable.new({ from: account_one });
        })

        it('should fail when minting when address is not contract owner', async function () {
            let reverted = false;
            try {
                await this.contract.mint(account_one, 4, "baseURI4", { from: account_two });
            } catch (e) {
                reverted = true;
            }
            assert.equal(reverted, true, "Account (2) was able to mint!");
        })

        it('should return contract owner', async function () {
            let owner = await this.contract.getOwner();
            assert.equal(owner, account_one, "The address is not the contract owner!");
        })

    });
})