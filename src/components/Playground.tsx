import { getContractAbi } from '../utils';

export async function Playground() {
  const data = await getContractAbi();

  console.log('Data without promise:', data);
  console.log('Promised data:', Promise.all(data));

  return <>Hello world</>;
}
