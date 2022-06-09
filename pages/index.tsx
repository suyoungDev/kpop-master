import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import Chat from '@C/chat';
import UserName from '@C/landing/User';
import Layout from '@F/Layout';
import { currentState } from '@atom/stage';

const Home: NextPage = () => {
  const stage = useRecoilValue(currentState);
  return (
    <Layout>
      {stage === 'enter' && <UserName />}
      {stage === 'chat' && <Chat />}
    </Layout>
  );
};

export default Home;
