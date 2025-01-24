function getBalance() {
  try {
    const balance = await web3.eth.getBalance(address);
    return balance;
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  console.error('Error:', error);
  let errorMessage = 'An unexpected error occurred.';
  if (error.code === -32000) {
    errorMessage = 'Invalid input parameters.';
  } else if (error.code === -32603) {
    errorMessage = 'Method not found.';
  } else if (error.message.includes('gas')) {
    errorMessage = 'Transaction failed due to insufficient gas.';
  }
  alert(errorMessage);
}