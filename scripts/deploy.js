const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const accountBalance = await deployer.provider.getBalance(deployer.address);

  // const weiAmount = (await deployer.getBalance()).toString();
  
  console.log("Account balance:", ethers.formatEther(accountBalance));
  const initialOwner = deployer.address;

  const Token = await ethers.getContractFactory("Veratix");
  const token = await Token.deploy(initialOwner);

  console.log("Token address:", token.target); // In ethers v6, use token.target instead of token.address
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});