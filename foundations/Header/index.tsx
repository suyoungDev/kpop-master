import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import flexGenerator from '@styles/flex';

type Props = {
  rightElement: JSX.Element;
};
const Header = ({ rightElement }: Props) => (
  <HeaderComponent>
    <Link href="/">로고(메인페이지로 이동)</Link>
    <div>{rightElement}</div>
  </HeaderComponent>
);

export default Header;

const HeaderComponent = styled.header`
  ${flexGenerator({ jc: 'sb' })};
  padding: 1rem;
  background-color: white;
`;
