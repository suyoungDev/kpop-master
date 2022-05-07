import { NextSeo } from 'next-seo';
import React from 'react';
import Layout from '@C/Layout';
import PlaylistSection from '@C/create/PlaylistSection';
import TagSection from '@C/create/TagSection';
import Title from '@C/create/Title';

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
      <Layout title="플레이리스트 생성">
        <>
          <Title />
          <TagSection />
          <PlaylistSection />
        </>
      </Layout>
    </>
  );
};

export default Create;
