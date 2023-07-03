'use client';

import { Header, CreatePress } from '../components';
// import { Playground } from '../components/Playground';

export default function Page() {
  return (
    <>
      <Header />
      <main
        style={{ height: 'calc(100vh - 72px)' }}
        className='flex items-center justify-center'
      >
        <CreatePress />

        {/* <Playground /> */}
      </main>
    </>
  );
}
