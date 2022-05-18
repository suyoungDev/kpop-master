import { NextPage } from 'next';
import Chat from '@C/chat';
import UserName from '@C/landing/User';
import Layout from '@F/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <UserName />
      <Chat />
    </Layout>
  );
};

export default Home;
