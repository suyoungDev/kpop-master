import React from 'react';
import styled from 'styled-components';

import { AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';

const Wrapper = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 200;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding: 2rem 1rem 0 1rem;
`;

const ShareTitle = styled.h2`
  margin-bottom: 1rem;
  font-family: 'nanum gothic';
`;

const Highlight = styled.span`
  background-image: linear-gradient(
    120deg,
    #ffb8b8 0%,
    rgba(251, 128, 165, 0.2) 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0.4em;
  background-position: 0 70%;
  transition: background-size 0.25s ease-in;

  &:hover {
    background-size: 100% 88%;
  }
`;

const ShareList = styled.div`
  width: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ShareMyRecord = () => {
  return (
    <Wrapper>
      <ShareTitle>
        <Highlight>내 결과 공유하기</Highlight>
      </ShareTitle>
      <ShareList>
        <AwesomeButtonSocial type='facebook' />
        <AwesomeButtonSocial type='twitter' />
      </ShareList>
    </Wrapper>
  );
};

export default ShareMyRecord;
