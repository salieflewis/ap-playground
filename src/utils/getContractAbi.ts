export async function getContractAbi() {
  const abi = await fetch(
    `https://${process.env.ETHERSCAN_ENDPOINT}/api?module=contract&action=getabi&address=${process.env.PRESS_CONTRACT}&apikey=${process.env.ETHERSCAN_API_KEY}`
  );

  if (!abi.ok) {
    throw new Error('Failed to fetch data');
  }

  return abi.json();
}
