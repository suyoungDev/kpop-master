import { NextPage } from 'next';
import useSWR, { useSWRConfig } from 'swr';
import MainHeader from '@C/MainHeader';

const Home: NextPage = () => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR('/api/hello');

  const onMutate = async () => {
    mutate('/api/hello', { ...data, name: 'hello' }, false);

    await fetch('/api/hello', {
      method: 'PATCH',
      body: JSON.stringify({ name: 'hello' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <MainHeader />
      <main>
        잘되나요?
        <div>hello {data.name}!</div>
        <button onClick={onMutate}>mutate</button>
      </main>
    </>
  );
};

export default Home;
