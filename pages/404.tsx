import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Custom404 = (): JSX.Element => {
  return (
    <main>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link href="/">돌아가기</Link>
    </main>
  );
};

export default Custom404;
