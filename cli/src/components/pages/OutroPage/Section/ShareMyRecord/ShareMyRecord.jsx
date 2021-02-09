import React from 'react';
import styled from 'styled-components';

import { AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';

const Wrapper = styled.div`
  width: 90%;
  font-size: 16px;
  font-weight: 200;
  padding: 1rem;
`;

const ShareTitle = styled.h2`
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.4em;
  background-position: 0 70%;
  transition: background-size 0.25s ease-in;

  &:hover {
    background-size: 100% 88%;
  }
`;

const ShareList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
