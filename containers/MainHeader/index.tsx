import Link from 'next/link';
import React from 'react';
import Header from '../../foundations/Header';

const MainHeader = () => {
  const RightMenu = (
    <ul>
      <li>
        <Link href="/create">플레이리스트 생성</Link>
      </li>
      <li>
        <Link href="/options">설정</Link>
      </li>
    </ul>
  );
  return <Header rightElement={RightMenu} />;
};

export default MainHeader;
