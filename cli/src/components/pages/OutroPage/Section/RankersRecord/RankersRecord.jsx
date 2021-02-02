import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RankersRecord = ({ myRecord }) => {
  const [userRankList, setUserRankList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getRecordsAll = async () => {
      const responseData = await axios.get('/api/user/getRecords');
      const dataList = responseData.data.userRecordList.record;

      setUserRankList(dataList);
      setIsLoading(false);
    };

    getRecordsAll();
  }, []);

  if (isLoading) {
    <div>...Loading...</div>;
  }
  return (
    <div style={{ marginTop: '50px' }}>
      <div>
        <h3>현재 랭커들 10위권 리스트</h3>
        <p>이름 + 맞춘 갯수 + 평균 속도</p>
        {userRankList.map((item, index) => (
          <div>
            <p key={index}>{item.name}</p>
            <p key={index}>{item.record}</p>
          </div>
        ))}
        <div>
          <div>
            <h2>10위권 랭커들의 평균 응답 시간</h2>
          </div>
          <div>
            <h2>10위권 유저들 평균 속도</h2>
            {(
              userRankList
                .map((user) => user.record)
                .sort((a, b) => a - b)
                .filter((item, index) => index > 11)
                .reduce((previous, current) => previous + current) / 10
            ).toFixed(2)}
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
            <p>나의 기록이면 몇등일까?</p>
            {userRankList.map((user) => user.record).indexOf({ myRecord })}등
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankersRecord;
