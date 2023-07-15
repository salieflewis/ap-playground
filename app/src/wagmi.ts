'use client';

import { getDefaultConfig } from 'connectkit';
import { createConfig, configureChains } from 'wagmi';
import { mainnet, optimism, arbitrum, goerli, sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import env from './services/env';

const alchemyKey = env.NEXT_PUBLIC_ALCHEMY_KEY;
const walletConnectID = env.NEXT_PUBLIC_WALLET_CONNECT_ID;

const { chains } = configureChains(
  [sepolia],
  [alchemyProvider({ apiKey: alchemyKey as string }), publicProvider()]
);

export const config = createConfig(
  getDefaultConfig({
    alchemyId: alchemyKey as string,
    walletConnectProjectId: walletConnectID as string,
    appName: 'Caisson',
    autoConnect: true,
    chains,
  })
);
