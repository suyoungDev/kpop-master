import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { SIZES } from '../../constants/theme';

import { GameResultContext } from '../../context/GameResultContext';
import { TrackListToPlayContext } from '../../context/TrackListToPlayContext';
import { AuthContext } from '../../context/AuthContext';

import ShareMyRecord from './Section/ShareMyRecord/ShareMyRecord';
import PreviousRecord from './Section/PreviousRecord/PreviousRecord';
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
  const [gameResult] = useContext(GameResultContext);
  const [trackListToPlay] = useContext(TrackListToPlayContext);
  const [isLoggedIn] = useContext(AuthContext);

  const user = useSelector((state) => state.user);

  const [userRankList, setUserRankList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const getAllGameRecords = async () => {
      const response = await axios.get('/api/game/getRecords');
      const data = response.data.gameRecordList;
      setUserRankList(data);
      setIsLoading(false);
    };

    getAllGameRecords();

    if (isLoggedIn) {
      uploadRecordToDB();
    }

    // eslint-disable-next-line
  }, []);

  const uploadRecordToDB = async () => {
    const correctAnswers = gameResult
      .filter((game) => game.result === 'correct')
      .map((song) => song.trackName);

    const wrongAnswers = gameResult
      .filter((game) => game.result === 'wrong')
      .map((song) => song.trackName);

    const gameData = {
      player: user.userData._id,
      record: averageResponseTime,
      correctTrackName: correctAnswers,
      wrongTrackName: wrongAnswers,
      gameResult: gameResult,
      theme: trackListToPlay.theme,
    };

    await axios.post('/api/game/upload', gameData);
  };

  const totalResponseTime = gameResult
    .map((item) => item.responseTime)
    .reduce((previous, currrent) => previous + currrent, 0);
  const averageResponseTime = (totalResponseTime / 5000).toFixed(2);

  return (
    <>
      <Center>
        <PageWrapper>
          <Description averageResponseTime={averageResponseTime} />
          <LinkButton links='/'>play again</LinkButton>
          <ContentWrapper>
            {!isLoggedIn ? (
              <PreviousRecord />
            ) : isLoggedIn && isLoading ? (
              <Spinner />
            ) : (
              <PreviousRecord
                userName={user.userData.displayName}
                userId={user.userData._id}
                userRankList={userRankList}
              />
            )}

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
