'use client';

import * as lanyard from 'lanyard';
import { Hex } from 'viem';

async function createTree() {
  const response = await lanyard.createTree({
    unhashedLeaves: [
      '0x0000000000000000000000000000000000000001',
      '0x0000000000000000000000000000000000000002',
    ],
  });

  if (!response) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const merkleRoot = response.merkleRoot;

  return merkleRoot;
}

export function CreateRoot() {
  async function handleClick() {
    try {
      const merkleRoot = await createTree();
      console.log(merkleRoot);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <button
      className='border border-sm border-grey px-2 py-1 hover:border-black'
      onClick={handleClick}
    >
      Create Root
    </button>
  );
}
