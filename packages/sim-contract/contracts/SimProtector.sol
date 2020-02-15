pragma solidity >=0.4.21 <0.7.0;

contract SimProtector {
  mapping(address => bool) approvedProviders;
  mapping(uint => address) phoneNumberToAddress;

  address owner;

  event SimChange(uint indexed phoneNumber, address indexed provider, uint timestamp);
  event RegisterPhoneNumber(uint indexed phoneNumber, address ownerAddress, uint timestamp);
  event ConfirmShutdown(uint indexed phoneNumber, uint timestamp);

  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  modifier onlyProvider {
    require(approvedProviders[msg.sender] == true);
    _;
  }

  function addProvider(address provider) public onlyOwner {
    approvedProviders[provider] = true;
  }

  function registerPhoneNumber(uint phoneNumber, address numberOwner) public onlyProvider {
    phoneNumberToAddress[phoneNumber] = numberOwner;
    emit RegisterPhoneNumber(phoneNumber, numberOwner, block.timestamp);
  }

  function confirmShutdown(uint phoneNumber) public {
    require(phoneNumberToAddress[phoneNumber] == msg.sender, "Only phone number owner can shutdown");
    emit ConfirmShutdown(phoneNumber, block.timestamp);
  }

  function registerSimChange(uint phoneNumber) public onlyProvider {
    emit SimChange(phoneNumber, msg.sender, block.timestamp);
  }
}
