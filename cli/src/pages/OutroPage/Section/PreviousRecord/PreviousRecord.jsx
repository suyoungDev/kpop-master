import React from 'react';

import { Wrapper, Content } from './PreviousRecord.styles';
import useOutroPage from '../../../../hook/useOutroPage';
import RecordTitle from './RecordTitle';

const PreviousRecord = () => {
  const { myBestRecord } = useOutroPage();

  return (
    <Wrapper>
      <RecordTitle />
      <Content>{myBestRecord && `${myBestRecord} 초`}</Content>
    </Wrapper>
  );
};

export default PreviousRecord;
