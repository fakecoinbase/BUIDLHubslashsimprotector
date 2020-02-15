pragma solidity >=0.4.21 <0.7.0;

contract SimProtector {
  mapping(address => bool) approvedProviders;
  mapping(address => uint) addressToPhoneNumber;

  address owner;

  event SimChange(uint indexed phoneNumber, address indexed provider, uint timestamp);
  event RegisterPhoneNumber(uint indexed phoneNumber, address ownerAddress, uint timestamp);
  event ConfirmShutdown(bytes32 indexed phoneNumber, uint timestamp);

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

  // function confirmShutdown(uint phoneNumber, address ownerAddress) public {
    // require(phoneNumberToAddress[phoneNumber] == msg.sender, "Only phone number owner can shutdown");
  function confirmShutdown(bytes32 hash, bytes memory signature) public onlyProvider {  
    address recovered = recoverAddress(hash, signature);
    require(addressToPhoneNumber(recovered) == hash, "Must be signed by owner");
    emit ConfirmShutdown(hash, block.timestamp);
  }

  function registerSimChange(uint phoneNumber) public onlyProvider {
    emit SimChange(phoneNumber, msg.sender, block.timestamp);
  }


  // Signature
  function recoverAddress(bytes32 hash, bytes memory signature) private returns (address) {
    bytes32 r;
    bytes32 s;
    uint8 v;
    assembly {
        r := mload(add(signature, 32))
        s := mload(add(signature, 64))
        v := and(mload(add(signature, 65)), 0x00000000000000000000000000000000000000000000000000000000000000ff)
    }
    return ecrecover(hash, v, r, s);
  }
}
