pragma solidity ^0.8.4;

// Learn more about the ERC20 implementation 
// on OpenZeppelin docs: https://docs.openzeppelin.com/contracts/4.x/erc20
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DevStone is ERC20 {
    constructor() payable ERC20("DevStone ETH Token", "DVT") {
        _mint(msg.sender, 1000 * 10 ** 18);
    }
}
