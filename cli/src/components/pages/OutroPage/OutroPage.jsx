import React, { useContext } from 'react';
import Button from '../../Button/Button';

import { GameResultContext } from '../../GameResultContext/GameResultContext';

import ShareMyRecord from './Section/ShareMyRecord/ShareMyRecord';
import PreviousRecord from './Section/PreviousRecord/PreviousRecord';
import SavingMyRecord from './Section/SavingMyRecord/SavingMyRecord';
import RankersRecord from './Section/RankersRecord/RankersRecord';
import CurrentRecord from './Section/CurrentRecord/CurrentRecord';

const OutroPage = () => {
  const [gameResult, setGameResult] = useContext(GameResultContext);

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
      <RankersRecord />
      <ShareMyRecord />
      <div>
        <Button child={'다시하기'} links='/' />
      </div>
    </div>
  );
};

export default OutroPage;
