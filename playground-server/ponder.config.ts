import type { Config } from "@ponder/core";

export const config: Config = {
  networks: [
    {
      name: "sepolia",
      chainId: 11155111,
      rpcUrl: process.env.PONDER_RPC_URL_11155111,
    },
  ],
  contracts: [
    {
      name: "ERC721PressFactory",
      network: "sepolia",
      abi: "./abis/ERC721PressFactory.json",
      address: "0x6975f5ccd3570dbf460451dc6f49cb7ceed8a369",
      startBlock: 3839850,
    },
  ],
};
