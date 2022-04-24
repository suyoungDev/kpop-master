import { NextPage } from 'next';
import Header from '../container/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header rightElement={<button>확인</button>} />
      <main>잘되나요?</main>
    </>
  );
};

export default Home;
