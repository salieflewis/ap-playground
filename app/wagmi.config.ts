import { defineConfig, loadEnv } from '@wagmi/cli';
import { react } from '@wagmi/cli/plugins';
import { sepolia } from 'wagmi/chains';
import { getContractAbi } from './src/utils';

export default defineConfig(async () => {
  const { abi } = await getContractAbi();
  return {
    out: 'src/generated.ts',
    contracts: [
      {
        abi: abi,
        address: {
          [sepolia.id]: '0xDdBB6815B0BD76b2F31766737C6D0b51c6ab2935',
        },
        name: 'ERC721Press',
      },
    ],
    plugins: [react()],
  };
});
