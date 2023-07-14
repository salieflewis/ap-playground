import { Abi } from 'viem';

export async function getContractAbi() {
  const response = await fetch(
    `${process.env.ETHERSCAN_ENDPOINT}/api?module=contract&action=getabi&address=${process.env.PRESS_CONTRACT}&apikey=${process.env.ETHERSCAN_API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const abi: Abi = await response.json();

  return { abi };
}
