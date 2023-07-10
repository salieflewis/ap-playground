import lanyard from 'lanyard';
import { Hex } from 'viem';

async function createTree() {
  // const requestBody = {
  //   unhashedLeaves: [
  //     '0x0000000000000000000000000000000000000001',
  //     '0x0000000000000000000000000000000000000002',
  //   ],
  // };
  // const response = await fetch('https://lanyard.org/api/v1/tree', {
  //   method: 'POST',
  //   body: JSON.stringify(requestBody),
  // });

  const response = await lanyard.createTree({
    unhashedLeaves: [
      '0xfb843f8c4992efdb6b42349c35f025ca55742d33',
      '0x7e5507281f62c0f8d666beaea212751cd88994b8',
      '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
    ],
    // unhashedLeaves: [address],
    // leafTypeDescriptor: ["address"] // optional, used for abi encoded types
    // packedEncoding: boolean // optional, default false
  });

  // Recommendation: handle errors
  if (!response) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  // console.log(response);
  const merkleRoot = response.merkleRoot;

  return merkleRoot;
}

export async function Playground() {
  const merkleRoot = await createTree();

  console.log(merkleRoot);

  return <main></main>;
}
