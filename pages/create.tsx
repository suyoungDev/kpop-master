import { NextSeo } from 'next-seo';
import React from 'react';
import Layout from '@C/Layout';
import Playlist from '@C/Playlist';

const Create = () => {
  return (
    <>
      <NextSeo
        title="플레이리스트 만들기"
        description="K-pop master project에 사용되는 플레이리스트를 직접 만들어 플레이 할 수 있습니다."
        canonical="https://kpop-master.dev/create"
        openGraph={{
          url: 'https://kpop-master.dev/create',
        }}
      />
      <Layout>
        <Playlist />
      </Layout>
    </>
  );
};

export default Create;
