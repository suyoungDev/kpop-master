import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { GameResultContext } from '../../GameResultContext/GameResultContext';

import Glass from '../../GlassContainer/Glass';
import ShareMyRecord from './Section/ShareMyRecord/ShareMyRecord';
import PreviousRecord from './Section/PreviousRecord/PreviousRecord';
import SavingMyRecord from './Section/SavingMyRecord/SavingMyRecord';
import RankersRecord from './Section/RankersRecord/RankersRecord';
import CurrentRecord from './Section/CurrentRecord/CurrentRecord';
import Button from '../../Button/Button';
import Spinner from './Section/Spinner/Spinner';
import Description from './Section/Description/Description';
import Center from '../../Center/Center';

const ContentWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
      }
    });
  }, []);

  const totalResponseTime = gameResult
    .map((item) => item.responseTime)
    .reduce((previous, currrent) => previous + currrent, 0);
  const averageResponseTime = (totalResponseTime / 10000).toFixed(2);

  return (
    <>
      <Center>
        <Glass>
          <Description averageResponseTime={averageResponseTime} />

          <ContentWrapper>
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
            {isLoading === 'loading' ? (
              <Spinner />
            ) : (
              <RankersRecord
                userRankList={userRankList}
                myRecord={averageResponseTime}
              />
            )}
            <ShareMyRecord />
            <Button links='/'>play again</Button>
          </ContentWrapper>
        </Glass>
      </Center>
    </>
  );
};

export default OutroPage;
