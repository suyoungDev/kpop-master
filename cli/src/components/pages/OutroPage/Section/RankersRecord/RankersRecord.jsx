import React, { useEffect, useState } from 'react';

const RankersRecord = ({ userRankList, myRecord }) => {
  console.log('내기록' + myRecord);
  console.log(userRankList.map((user) => user.record).indexOf(2.96));
  return (
    <div style={{ marginTop: '50px' }}>
      <h3>현재 랭커들 10위권 리스트</h3>
      <div></div>
      <table style={{ width: '250px', marginTop: '20px', padding: '20px' }}>
        <th
          style={{
            textAlign: 'left',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          이름
        </th>
        <th
          style={{
            textAlign: 'right',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          기록
        </th>
        {userRankList
          .filter((item, index) => index < 10)
          .map((item) => (
            <tr key={item._id}>
              <th style={{ width: '70%', textAlign: 'left' }}>
                {item.userName}
              </th>
              <th style={{ textAlign: 'right' }}>{item.record}</th>
            </tr>
          ))}
      </table>
      <div>
        <div>
          <p>
            10위권 유저들 평균 속도:
            {(
              userRankList
                .map((user) => user.record)
                .filter((item, index) => index < 10)
                .reduce((previous, current) => previous + current) / 10
            ).toFixed(2)}{' '}
            초
          </p>
        </div>
        <div>
          <p>
            유저들 전체 평균 속도:
            {(
              userRankList
                .map((user) => user.record)
                .reduce((prev, curr) => prev + curr) / userRankList.length
            ).toFixed(2)}
            초
          </p>
          <br />
          <br />
          <p>나의 기록이면 몇등일까?</p>
          {userRankList.map((user) => user.record).indexOf(myRecord)}등
        </div>
      </div>
    </div>
  );
};

export default RankersRecord;
