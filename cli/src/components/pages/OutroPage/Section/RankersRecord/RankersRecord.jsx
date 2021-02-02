import React from 'react';

const RankersRecord = ({ userRankList, myRecord }) => {
  return (
    <div style={{ marginTop: '50px' }}>
      <h3>현재 랭커들 10위권 리스트</h3>
      <div></div>
      <table
        style={{
          width: '450px',
          marginTop: '20px',
          border: 'solid 1px',
          margin: '15px',
        }}
      >
        <th
          style={{
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          순위
        </th>
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
          .map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <th style={{ width: '70%', textAlign: 'left' }}>
                {item.userName}
              </th>
              <th style={{ textAlign: 'right' }}>{item.record}</th>
            </tr>
          ))}
        <tr>
          <th></th>
          <th>...</th>
          <th></th>
        </tr>
        <tr>
          <th>
            {
              userRankList
                .map((user) => user.record)
                .filter((record) => record < myRecord).length
            }
          </th>
          <th>👈👈</th>
          <th style={{ textAlign: 'right' }}>{myRecord}</th>
        </tr>
        <tr>
          <th></th>
          <th>...</th>
          <th></th>
        </tr>
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
        </div>
      </div>
    </div>
  );
};

export default RankersRecord;
