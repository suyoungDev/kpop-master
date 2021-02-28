import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../constants/theme';
import { AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';

const Wrapper = styled.div`
  width: 85%;
  font-size: 20px;
  font-weight: 200;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin: 1.5rem 0;
`;

const ShareTitle = styled.h3`
  margin-bottom: 1rem;
  font-family: 'nanum gothic';
`;

const Highlight = styled.span`
  background: -webkit-linear-gradient(
    ${COLORS.primaryOne},
    ${COLORS.primaryTwo}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ShareList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .first-button {
    margin-right: 1.5rem;
  }
`;

const ShareMyRecord = () => {
  return (
    <Wrapper>
      <ShareTitle>
        <Highlight>내 결과 공유</Highlight>
      </ShareTitle>
      <ShareList>
        <AwesomeButtonSocial type='facebook' className='first-button' />
        <AwesomeButtonSocial type='twitter' />
      </ShareList>
    </Wrapper>
  );
};

export default ShareMyRecord;
