var SimpleVoter = artifacts.require("./SimpleVoter.sol");

module.exports = (deployer, network) => {
    deployer.deploy(SimpleVoter).then(() => {
        console.log("   > Deployed contract to address = " + SimpleVoter.address);
    });
}
