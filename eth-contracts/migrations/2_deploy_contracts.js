// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var ERC721Mintable = artifacts.require("./ERC721Mintable.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721Mintable);
  deployer.deploy(SquareVerifier)
  .then(() => {
    return deployer.deploy(SolnSquareVerifier,SquareVerifier.address)
  });
};