'use client';

import { useAccount } from 'wagmi';
import { Hex } from 'viem';
import { useModal } from 'connectkit';
import lanyard from 'lanyard';

import React, { useState, useEffect } from 'react';

/**
 * Create a merkle tree using an array of addresses.
 */
async function createTree() {
  console.log(lanyard)
  const response = await lanyard.createTree({
    // unhashedLeaves: [address],
    unhashedLeaves: [
      '0xfb843f8c4992efdb6b42349c35f025ca55742d33',
      '0x7e5507281f62c0f8d666beaea212751cd88994b8',
      '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
    ],
    // leafTypeDescriptor: ["address"] // optional, used for abi encoded types
    // packedEncoding: boolean // optional, default false
  });

  console.log(response.merkleRoot);
  return response.merkleRoot;
}

export function CreateRoot() {
  const [merkleRoot, setMerkleRoot] = useState<string>();

  useEffect(() => {
    (async () => {
      try {
        const merkleRoot = await createTree();
        setMerkleRoot(merkleRoot);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    })();
  }, []);

  console.log(merkleRoot);

  return <div>{merkleRoot}</div>;
}

// export function CreateRoot() {
//   const { isConnected, address } = useAccount();
//   const { setOpen } = useModal();

//   async function handleClick() {
//     if (!isConnected) {
//       setOpen(true);
//     } else {
//       await createTree?.({ address: address as Hex });
//     }
//   }

//   return (
//     <button
//       className='border border-sm border-grey px-2 py-1 hover:border-black'
//       onClick={handleClick}
//     >
//       Create Root
//     </button>
//   );
// }
