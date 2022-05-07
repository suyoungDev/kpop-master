import Link from 'next/link';
import React from 'react';
import Layout from '@C/Layout';

const Custom404 = (): JSX.Element => {
  return (
    <Layout>
      <>
        <p>페이지를 찾을 수 없습니다.</p>
        <Link href="/">돌아가기</Link>
      </>
    </Layout>
  );
};

export default Custom404;
