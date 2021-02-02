import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { GameResultContext } from '../../GameResultContext/GameResultContext';

import ShareMyRecord from './Section/ShareMyRecord/ShareMyRecord';
import PreviousRecord from './Section/PreviousRecord/PreviousRecord';
import SavingMyRecord from './Section/SavingMyRecord/SavingMyRecord';
import RankersRecord from './Section/RankersRecord/RankersRecord';
import CurrentRecord from './Section/CurrentRecord/CurrentRecord';
import Button from '../../Button/Button';

const OutroPage = () => {
  // eslint-disable-next-line
  const [gameResult, setGameResult] = useContext(GameResultContext);

  const [userRankList, setUserRankList] = useState();
  const [isLoading, setIsLoading] = useState('loading');

  useEffect(() => {
    setIsLoading('loading');

    axios.get('/api/user/getRecords').then((res) => {
      if (res.data.success) {
        setUserRankList(res.data.userRecordList);
        setIsLoading('loaded');
      } else {
        console.log('데이터 가져오기 실패');
      }
    });
  }, []);

  const totalResponseTime = gameResult
    .map((item) => item.responseTime)
    .reduce((previous, currrent) => previous + currrent, 0);

  const averageResponseTime = (totalResponseTime / 10000).toFixed(2);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PreviousRecord
        averageResponseTime={averageResponseTime}
        gameResult={gameResult}
      />
      <SavingMyRecord
        averageResponseTime={averageResponseTime}
        gameResult={gameResult}
      />
      <CurrentRecord
        averageResponseTime={averageResponseTime}
        gameResult={gameResult}
      />
      <br />
      <br />

      {isLoading === 'loading' ? (
        <div>..loading...</div>
      ) : (
        <RankersRecord
          userRankList={userRankList}
          myRecord={averageResponseTime}
        />
      )}

      <ShareMyRecord />
      <div>
        <Button child={'다시하기'} links='/' />
      </div>
    </div>
  );
};

export default OutroPage;
