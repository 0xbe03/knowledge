pragma solidity ^0.6.8;

contract HelloWorld {
    string greeting;
    
    constructor() public {
        greeting = 'Hello World!';
    }
    
    function get() public view returns(string memory) {
        return greeting;
    }
    
    function set(string memory _greet) public {
        greeting = _greet;
    }
        
    
}
