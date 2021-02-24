import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import { SIZES } from '../../constants/theme';

import { GameResultContext } from '../../context/GameResultContext';

import ShareMyRecord from './Section/ShareMyRecord/ShareMyRecord';
import PreviousRecord from './Section/PreviousRecord/PreviousRecord';
import SavingMyRecord from './Section/SavingMyRecord/SavingMyRecord';
import RankersRecord from './Section/RankersRecord/RankersRecord';
import CurrentRecord from './Section/CurrentRecord/CurrentRecord';
import Description from './Section/Description/Description';
import Spinner from './Section/Spinner/Spinner';
import LinkButton from '../../components/LinkButton/LinkButton';
import Center from '../../components/Center/Center';
import PageWrapper from './Section/PageWrapper/PageWrapper';

const ContentWrapper = styled.div`
  max-width: ${SIZES.tabletWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
`;

const OutroPage = () => {
  // eslint-disable-next-line
  const [gameResult, setGameResult] = useContext(GameResultContext);
  const { width, height } = useWindowSize();

  const [userRankList, setUserRankList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios.get('/api/user/getRecords').then((res) => {
      if (res.data.success) {
        setUserRankList(res.data.userRecordList);
        setIsLoading(false);
      }
    });
    // eslint-disable-next-line
  }, []);

  const totalResponseTime = gameResult
    .map((item) => item.responseTime)
    .reduce((previous, currrent) => previous + currrent, 0);
  const averageResponseTime = (totalResponseTime / 10000).toFixed(2);

  return (
    <>
      <Confetti
        width={width}
        height={height}
        gravity={0.03}
        recycle={false}
        numberOfPieces={500}
      />
      <Center>
        <PageWrapper>
          <Description averageResponseTime={averageResponseTime} />
          <LinkButton links='/'>play again</LinkButton>
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
            {isLoading ? (
              <Spinner />
            ) : (
              <RankersRecord
                userRankList={userRankList}
                myRecord={averageResponseTime}
              />
            )}
            <ShareMyRecord />
          </ContentWrapper>
        </PageWrapper>
      </Center>
    </>
  );
};

export default OutroPage;
