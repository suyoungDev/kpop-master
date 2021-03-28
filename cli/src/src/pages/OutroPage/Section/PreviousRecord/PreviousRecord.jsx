import React, { useEffect, useState, useContext } from 'react';

import { BiRocket } from 'react-icons/bi';
import { AuthContext } from '../../../../context/AuthContext';
import { BsXCircle } from 'react-icons/bs';
import { Wrapper, Title, Content, Bold } from './PreviousRecord.styles';

const PreviousRecord = ({ userRankList, userName, userId }) => {
  const [isLoggedIn] = useContext(AuthContext);
  const [myBestRecord, setMyBestRecord] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const filtered = userRankList.filter((record) => record._id === userId)[0]
        .record;
      setMyBestRecord(filtered);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Title>
        {!userId ? (
          <Title>
            <BsXCircle className='icon' />
            미접속 시 기록이 저장되지않습니다.
          </Title>
        ) : (
          <Title>
            <BiRocket className='icon' /> <Bold>{userName}</Bold> 님의 최고 기록
          </Title>
        )}
      </Title>
      <Content>{!userId ? null : `${myBestRecord} 초`}</Content>
    </Wrapper>
  );
};

export default PreviousRecord;
