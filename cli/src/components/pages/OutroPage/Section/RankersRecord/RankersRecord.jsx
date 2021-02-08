import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { FiChevronRight } from 'react-icons/fi';
import { FONTS } from '../../../../../constants/theme';
import './RankersRecord.scss';

const TableContainer = styled.table`
  width: 100%;
  font-family: ${FONTS.korBody};
  font-size: 16px;
  font-weight: 200;
  overflow: hidden;
`;

const RankersRecord = ({ userRankList, myRecord }) => {
  const content = useRef(null);
  const [isActivate, setIsActivate] = useState(false);
  const [tableHeight, setTableHeight] = useState('0rem');

  const toggleAccordion = () => {
    setIsActivate(!isActivate);
    setTableHeight(isActivate ? '0rem' : `${content.current.scrollHeight}px`);
  };

  return (
    <div className='rank-table-container'>
      <button className='rank-table-title' onClick={toggleAccordion}>
        내 순위 보기
        <FiChevronRight
          className={`${isActivate && 'rotate'} accordion-icon`}
          size='1.2rem'
        />
      </button>

      <div
        className='rank-table-content'
        style={{ height: tableHeight }}
        ref={content}
      >
        <TableContainer className='rank-table'>
          {userRankList
            .filter((item, index) => index < 5)
            .map((item, index) => (
              <tr key={item._id}>
                <th className='rankers-record'>{index + 1}위</th>
                <th className='rankers-record' id='name'>
                  {item.userName}
                </th>
                <th className='rankers-record' id='record'>
                  {item.record} 초
                </th>
              </tr>
            ))}
          <tr>
            <th></th>
            <th>...</th>
            <th></th>
          </tr>
          <tr>
            <th id='myRecord'>
              {
                userRankList
                  .map((user) => user.record)
                  .filter((record) => record < myRecord).length
              }
              위
            </th>
            <th id='myRecord'>👈 내 순위</th>
            <th id='myRecord'>{myRecord} 초</th>
          </tr>
        </TableContainer>
        <div className='users-average-data'>
          <div className='users-data'>
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
          </div>
          <div className='users-data'>
            <span>유저들 전체 평균</span>
            <span>
              {(
                userRankList
                  .map((user) => user.record)
                  .reduce((prev, curr) => prev + curr) / userRankList.length
              ).toFixed(2)}
              초
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankersRecord;
