import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RiCake3Line } from 'react-icons/ri';

const Titlecontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .total {
    font-weight: 200;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const MyTier = styled.span`
  padding-left: 1rem;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 200;
`;

const RankersTableTitle = ({ myRecord, userRankList }) => {
  const [percentage, setPercentage] = useState();
  const [tier, setTier] = useState('');

  useEffect(() => {
    const number = Math.floor(
      (userRankList
        .map((user) => user.record)
        .filter((record) => record < myRecord).length /
        userRankList.length) *
        100
    );

    if (number > 50) {
      setTier('하위');
      const myUnderTier = 100 - number;
      setPercentage(myUnderTier);
    } else {
      setTier('상위');
      setPercentage(number);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Titlecontainer>
      <RiCake3Line id='icon' />
      {userRankList
        .map((user) => user.record)
        .filter((record) => record < myRecord).length + 1}
      등 <span className='total'>(총 {userRankList.length}명)</span>
      <MyTier>
        {tier} {percentage}%
      </MyTier>
    </Titlecontainer>
  );
};

export default RankersTableTitle;
