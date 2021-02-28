import React, { useContext, useEffect } from 'react';

import Center from '../../components/Center/Center';
import RoundContainer from '../../components/RoundContainer/RoundContainer';
import levelImage from '../../constants/image/outroImage/level';
import Row from '../../components/Row/Row';
import GameTitle from '../../components/GameTitle/GameTitle';
import ChooseOptions from './section/ChooseOptions/ChooseOptions';
import HowToPlay from './section/HowToPlay/HowToPlay';

import { GameEndContext } from '../../context/GameEndContext';
import { GameResultContext } from '../../context/GameResultContext';

import { COLORS } from '../../constants/theme';
const LandingPage = () => {
  // eslint-disable-next-line
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);
  // eslint-disable-next-line
  const [gameResult, setGameResult] = useContext(GameResultContext);

  useEffect(() => {
    setIsGameEnd(false);
    setGameResult([]);
    // eslint-disable-next-line
  }, []);

  return (
    <Center bgcolor={`${COLORS.primaryTwo}`} landing>
      <Row main>
        <GameTitle landing>
          K-pop 
          <br />
          Master
          <br />
          Quiz
        </GameTitle>
        <img src={levelImage.four} alt='우주에서 학구열이 강한 몬스터' />
      </Row>
      <RoundContainer main>
        <Row mainCard>
          <HowToPlay />
          <ChooseOptions />
        </Row>
      </RoundContainer>
    </Center>
  );
};
export default LandingPage;
