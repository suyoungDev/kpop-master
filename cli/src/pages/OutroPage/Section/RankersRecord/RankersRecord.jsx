import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { RiCake3Line } from 'react-icons/ri';

import Accordion from '../Accordion/Accordion';

const TableContainer = styled.table`
  width: 100%;
  font-family: 'Nanum Gothic';
  font-size: 16px;
  font-weight: 200;
  overflow: hidden;
  padding: 0.5rem 1rem 1rem 1rem;

  .rankers-record {
    font-weight: 200;
  }

  #name {
    width: 65%;
  }

  #record {
    text-align: right;
  }

  th {
    padding: 4px;
  }

  #myRecord {
    color: black;
    font-weight: bold;
  }
`;

const Titlecontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  #total {
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

const UsersAverageDataContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  padding: 0.5rem 0;
`;
const UsersData = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-between;
  line-height: 24px;
  font-size: 14px;
`;

const RankersRecord = ({ userRankList, myRecord }) => {
  const [existingUserName, setexistingUserName] = useState();

  useEffect(() => {
    const userName = localStorage.getItem('_userName');
    setexistingUserName(userName);
  }, []);

  const title = (
    <Titlecontainer>
      <RiCake3Line id='icon' />
      {
        userRankList
          .map((user) => user.record)
          .filter((record) => record < myRecord).length
      }
      등 <span id='total'>(총 {userRankList.length}명)</span>
      <MyTier>
        상위{' '}
        {Math.floor(
          (userRankList
            .map((user) => user.record)
            .filter((record) => record < myRecord).length /
            userRankList.length) *
            100
        )}
        %
      </MyTier>
    </Titlecontainer>
  );

  const userAverageData = (
    <UsersAverageDataContainer>
      <UsersData>
        <span>상위 10위 평균</span>
        <span>
          {(
            userRankList
              .map((user) => user.record)
              .filter((item, index) => index < 10)
              .reduce((previous, current) => previous + current) / 10
          ).toFixed(2)}
          초
        </span>
      </UsersData>
      <UsersData>
        <span>유저들 전체 평균</span>
        <span>
          {(
            userRankList
              .map((user) => user.record)
              .reduce((prev, curr) => prev + curr) / userRankList.length
          ).toFixed(2)}
          초
        </span>
      </UsersData>
    </UsersAverageDataContainer>
  );

  const content = (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <TableContainer>
        <tbody>
          {userRankList
            .filter((item, index) => index < 3)
            .map((item, index) => (
              <tr key={item._id}>
                <td className='rankers-record'>{index + 1}위</td>
                <td className='rankers-record' id='name'>
                  {item.userName}
                </td>
                <td className='rankers-record' id='record'>
                  {item.record} 초
                </td>
              </tr>
            ))}

          <tr>
            <td></td>
            <td>...</td>
            <td></td>
          </tr>

          <tr>
            <td id='myRecord'>
              {
                userRankList
                  .map((user) => user.record)
                  .filter((record) => record < myRecord).lengtd
              }
              위
            </td>
            <td id='myRecord'>
              {existingUserName ? existingUserName : '내 순위'}
            </td>
            <td id='record'>{myRecord} 초</td>
          </tr>
        </tbody>
      </TableContainer>
      {userAverageData}
    </div>
  );

  return <Accordion title={title} content={content} />;
};

export default RankersRecord;
