import React from 'react';
import { useSelector } from 'react-redux';

import { BiRocket } from 'react-icons/bi';
import { BsXCircle } from 'react-icons/bs';
import { Title, Bold } from './PreviousRecord.styles';

const RecordTitle = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <Title>
      {userData._id ? (
        <Title>
          <BiRocket />
          <Bold>{userData.displayName}</Bold>
          님의 최고 기록
        </Title>
      ) : (
        <Title>
          <BsXCircle />
          미접속 시 기록이 저장되지않습니다.
        </Title>
      )}
    </Title>
  );
};

export default RecordTitle;
