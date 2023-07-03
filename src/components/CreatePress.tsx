import { Hex } from 'viem';
import { useCreate721Press } from '../hooks/useCreate721Press';
import { useAccount } from 'wagmi';
import { useModal } from 'connectkit';

export function CreatePress() {
  const { isConnected, address } = useAccount();
  const { setOpen } = useModal();
  const { createPress } = useCreate721Press({
    name: 'Liberos',
    symbol: 'LBRS',
    initialOwner: address as Hex,
    databaseInit:
      '0x000000000000000000000000ecc5ebe5ca9ad8dd5afbe535d09cf6137183d5c90000000000000000000000000000000000000000000000000000000000000080000000000000000000000000a4461833a761fd1b637b6f970a82ceaf257a98ec000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000004d792da9ff3b0cc0a9d793084686ff7990434e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000004000000000000000000000000153d2a196dc8f1f6b9aa87241864b3e4d4fec1700000000000000000000000000000000000000000000000000000000000000003000000000000000000000000c5fe7016bdc0b777fbcbfa9b3ad99bf3c67891910000000000000000000000000000000000000000000000000000000000000003000000000000000000000000bc68dee71fd19c6eb4028f98f3c3ab62aad6fef300000000000000000000000000000000000000000000000000000000000000030000000000000000000000004c53c6d546c9e38db56040ab505460a9187a5281000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000042697066733a2f2f62616679626569666f376932336f617a7a356a6e706d7273687274667533656a6732696d68706e7a6e6d6b367a357779776d7361336a7a6f776c61000000000000000000000000000000000000000000000000000000000000',
  });

  function handleClick() {
    if (!isConnected) {
      setOpen(true);
    } else {
      createPress?.();
    }
  }

  return (
    <button
      className='border border-sm border-grey px-2 py-1 hover:border-black'
      onClick={handleClick}
    >
      Create Press
    </button>
  );
}
