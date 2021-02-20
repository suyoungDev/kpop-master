import React, { useContext, useEffect } from 'react';

import LinkButton from '../../components/LinkButton/LinkButton';
import Card from '../../components/Card/Card';
import Center from '../../components/Center/Center';
import CardContainer from '../../components/CardContainer/CardContainer';
import RoundContainer from '../../components/RoundContainer/RoundContainer';
import levelImage from '../../constants/image/outroImage/level';
import Row from '../../components/Row/Row';
import GameTitle from '../../components/GameTitle/GameTitle';
import Snippet from '../../components/Snippet/Snippet';

import { GameEndContext } from '../../context/GamEndContext/GameEndContext';
import { GameResultContext } from '../../context/GameResultContext/GameResultContext';

import { COLORS } from '../../constants/theme';

const LandingPage = () => {
  // eslint-disable-next-line
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);
  // eslint-disable-next-line
  const [gameResult, setGameResult] = useContext(GameResultContext);

  useEffect(() => {
    setIsGameEnd(false);
    setGameResult([]);
    // eslint-disable-next-line
  }, []);

  return (
    <Center bgcolor={`${COLORS.primaryDark}`} landing>
      <Row main>
        <GameTitle landing>K-pop Master Quiz</GameTitle>
        <img src={levelImage.four} alt='우주에서 학구열이 강한 몬스터' />
      </Row>
      <RoundContainer main>
        <CardContainer id='three'>
          <Card alert='플레이 방법' title='2020-02'>
            <ul>
              <li>노래를 듣고 20초 안에 노래제목을 맞추는 게임입니다.</li>
              <li>10초에 힌트가 나가니 참고해주세요.</li>
              <li>대소문자 구분과 공백, 특수문자는 무시합니다.</li>
              <li id='tip'>
                🚩 정답이 <span>Crazy Over You</span>일 때,
                <br />
                <span>crazyoveryou</span> 혹은 <span>크레이지오버유</span>으로
                제출해도 정답 처리됩니다.
              </li>
            </ul>
          </Card>
          <Card alert='주의 사항' title='2020-02' secondary>
            <ul>
              <li>아직 블랙핑크만 지원됩니다! 😥</li>
              <li>유튜브 프리미엄을 사용해야지 원활한 플레이가 가능합니다.</li>
            </ul>
            <ul style={{ position: 'relative' }}>
              <li>
                <Snippet style={{ position: 'absolute', left: '-16px' }}>
                  지원예정
                </Snippet>
              </li>
              <li style={{ paddingTop: '2.5rem' }}>년도별 top 100</li>
              <li>가수 (검색 가능)</li>
            </ul>
          </Card>
        </CardContainer>
        <Row id='two'>
          <LinkButton links={'/start'}>start</LinkButton>
        </Row>
      </RoundContainer>
    </Center>
  );
};
export default LandingPage;
