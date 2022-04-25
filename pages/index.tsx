import { NextPage } from 'next';
import MainHeader from '../containers/MainHeader';

const Home: NextPage = () => {
  return (
    <>
      <MainHeader />
      <main>잘되나요?</main>
    </>
  );
};

export default Home;
