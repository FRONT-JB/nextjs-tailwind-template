import type { NextPage } from 'next';
import Text from '@/components/Text';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-slate-300 text-black selection:bg-transparent">
      <Text />
    </div>
  );
};

export default Home;
