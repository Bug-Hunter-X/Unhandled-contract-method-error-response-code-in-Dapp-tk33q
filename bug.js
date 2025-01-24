function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

//Error:  Unexpected response code when calling contract method, the code is not handled in the dapp

function handleError(error) {
  console.error('Error:', error);
  // Add logic here to handle different error codes appropriately and display user-friendly messages
}