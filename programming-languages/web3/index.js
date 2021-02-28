var Web3 = require('web3')

var url = 'HTTP://127.0.0.1:7545'

var web3 = new Web3(url)

var address = '0x68231F0b756Fc9CC362dCCa34861716D9f90a91a'

web3.eth.getBalance(address)
    .then(res => balance = res)
    .then(() => balance = web3.utils.fromWei(balance , 'ether'))
    .then(() => console.log(balance))