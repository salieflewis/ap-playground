import { erc721PressFactoryAbi } from '../abi/erc721PressFactoryAbi';
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { Hex, Hash } from 'viem';

interface CreatePressProps {
  name: string;
  symbol: string;
  initialOwner: Hex;
  databaseInit: Hash;
}

export function useCreate721Press({
  name,
  symbol,
  initialOwner,
  databaseInit,
}: CreatePressProps) {
  const settings = {
    fundsRecipient: '0x0000000000000000000000000000000000000000' as Hex,
    royaltyBPS: 0,
    transferable: true,
  };

  const { config } = usePrepareContractWrite({
    address: '0x6975F5CcD3570dBF460451DC6f49CB7ceED8A369',
    abi: erc721PressFactoryAbi,
    functionName: 'createPress',
    args: [name, symbol, initialOwner, databaseInit, settings],
    chainId: sepolia.id,
  });

  const { data: createPressData, write: createPress } =
    useContractWrite(config);

  const { isLoading: createPressLoading, isSuccess: createPressSuccess } =
    useWaitForTransaction({
      hash: createPressData?.hash,
    });

  return {
    createPress,
    createPressLoading,
    createPressSuccess,
  };
}
