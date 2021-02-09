import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { GameResultContext } from '../../GameResultContext/GameResultContext';

import ShareMyRecord from './Section/ShareMyRecord/ShareMyRecord';
import PreviousRecord from './Section/PreviousRecord/PreviousRecord';
import SavingMyRecord from './Section/SavingMyRecord/SavingMyRecord';
import RankersRecord from './Section/RankersRecord/RankersRecord';
import CurrentRecord from './Section/CurrentRecord/CurrentRecord';
import Button from '../../Button/Button';
import Spinner from './Section/Spinner/Spinner';
import Description from './Section/Description/Description';

import './OutroPage.scss';

import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const OutroPage = () => {
  // eslint-disable-next-line
  const [gameResult, setGameResult] = useContext(GameResultContext);

  const [userRankList, setUserRankList] = useState();
  const [isLoading, setIsLoading] = useState('loading');

  const { width, height } = useWindowSize();

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
    <div className='box-container'>
      <Confetti width={width} height={height} recycle={false} />
      <div className='glass-wrapper'>
        <Description averageResponseTime={averageResponseTime} />
        <PreviousRecord
          averageResponseTime={averageResponseTime}
          gameResult={gameResult}
        />
        <SavingMyRecord
          averageResponseTime={averageResponseTime}
          gameResult={gameResult}
        />

        {isLoading === 'loading' ? (
          <Spinner />
        ) : (
          <RankersRecord
            userRankList={userRankList}
            myRecord={averageResponseTime}
          />
        )}

        <CurrentRecord
          averageResponseTime={averageResponseTime}
          gameResult={gameResult}
        />

        <ShareMyRecord />
        <Button links='/'>play again</Button>
      </div>
    </div>
  );
};

export default OutroPage;
