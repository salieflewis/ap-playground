import { Header, CreatePress, CreateRoot, Playground } from '../components';

export default function Page() {
  return (
    <>
      <Header />
      <main
        style={{ height: 'calc(100vh - 72px)' }}
        className='flex items-center justify-center'
      >
        <div className='flex gap-2'>
          {/* <CreatePress /> */}
          {/* <CreateRoot /> */}
        </div>
        <Playground />
      </main>
    </>
  );
}
