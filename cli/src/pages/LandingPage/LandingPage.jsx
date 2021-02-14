import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import LinkButton from '../../components/LinkButton/LinkButton';
import Card from '../../components/Card/Card';
import Center from '../../components/Center/Center';
import CardContainer from '../../components/CardContainer/CardContainer';
import RoundContainer from '../../components/RoundContainer/RoundContainer';
import levelImage from '../../constants/image/outroImage/level';
import Row from '../../components/Row/Row';

import { GameEndContext } from '../../context/GamEndContext/GameEndContext';
import { GameResultContext } from '../../context/GameResultContext/GameResultContext';

import { COLORS, FONT, SIZES, SCREEN } from '../../constants/theme';

const TitleWrapper = styled.div`
  width: 400px;
  height: auto;

  text-align: left;
  font-size: 3rem;
  font-family: ${FONT.englishTitleCurv};
  font-weight: 700;
  color: ${COLORS.primaryMiddle};
  text-shadow: 0 7px 7px rgba(0, 0, 0, 0.13);
  -webkit-text-stroke: 2px #f8f8f8;

  @media ${SCREEN.tablet} {
    margin: 0;
    color: ${COLORS.primaryMiddle};
    text-shadow: none;
    -webkit-text-stroke: 0;
    background: -webkit-linear-gradient(
      ${COLORS.primaryDark},
      ${COLORS.primaryMiddle}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5.4rem;
    width: 600px;
    flex-wrap: nowrap;
  }
`;

const LandingPage = () => {
  // eslint-disable-next-line
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);
  // eslint-disable-next-line
  const [gameResult, setGameResult] = useContext(GameResultContext);

  useEffect(() => {
    //setIsGameEnd('onGoing');
    //setGameResult([]);
  }, []);

  return (
    <Center bgcolor={`${COLORS.primaryDark}`}>
      <Row main>
        <TitleWrapper>K-pop Master Quiz</TitleWrapper>
        <img src={levelImage.four} />
      </Row>
      <RoundContainer>
        <CardContainer id='three'>
          <Card alert='플레이 방법' title='2020-02'>
            <ul>
              <li>노래를 듣고 10초 안에 노래제목을 맞추는 게임입니다.</li>
              <li>6초에 힌트가 나가니 참고해주세요.</li>
              <li>대소문자 구분과 공백, 특수문자는 무시합니다.</li>
              <li id='tip'>
                🚩 정답이 <span>Crazy Over You</span>일 때,
                <br />
                <span>crazyoveryou</span> 혹은 <span>크레이지오버유</span>으로
                제출해도 정답 처리됩니다.
              </li>
            </ul>
          </Card>
          <Card alert='개발 예정' title='2020-02' secondary>
            <ul>
              <li>아직 블랙핑크만 지원됩니다! 😥</li>
              <li>년도별 top 100 지원</li>
              <li>가수 (검색 지원)</li>
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
