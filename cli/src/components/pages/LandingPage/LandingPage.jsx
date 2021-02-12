import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../Button/Button';
import GlassContainer from '../../GlassContainer/GlassContainer';
import Glass from '../../GlassContainer/Glass';

import { GameEndContext } from '../../GamEndContext/GameEndContext';
import { GameResultContext } from '../../GameResultContext/GameResultContext';

const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  text-align: left;
  font-size: 1.2rem;
  font-family: 'Fredoka One', cursive;
  font-weight: bold;
  color: rgb(223, 132, 117);
  text-shadow: 5px 5px 5px #9e5149;
  -webkit-text-stroke: 0.1px #f8f8f8;
`;

const AlertContainer = styled.div`
  margin-bottom: 1rem;
  ul {
    margin: 0.5rem 0;
    font-size: 14px;
    line-height: 1.4rem;
    padding-left: 1.4rem;
    list-style: none;
    font-family: 'nanum gothic';

    #tip {
      color: #696c70;
      padding-left: 0.5rem;
    }

    span {
      color: black;
      background: rgba(178, 190, 195, 0.5);
      padding: 2px 4px;
    }
  }
`;

const AlertTitle = styled.p`
  width: 20%;
  max-width: 20rem;
  min-width: 8rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 10px;

  text-align: center;
  font-size: 12px;
  letter-spacing: 0.1rem;
  font-family: 'nanum gothic';

  background-color: ${({ blue }) =>
    blue ? 'rgb(128, 171, 251, 0.2)' : 'rgba(251, 128, 165, 0.2)'};
  color: ${({ blue }) => (blue ? 'rgb(29, 20, 107)' : 'rgb(177, 44, 44)')};
  margin-top: ${({ blue }) => blue && '1.5rem'};
`;

const LandingPage = () => {
  // eslint-disable-next-line
  const [isGameEnd, setIsGameEnd] = useContext(GameEndContext);
  // eslint-disable-next-line
  const [gameResult, setGameResult] = useContext(GameResultContext);

  useEffect(() => {
    setIsGameEnd('onGoing');
    setGameResult([]);
  }, []);

  return (
    <GlassContainer>
      <TitleWrapper>
        <h1>
          K-pop
          <br /> Master <br />
          Quiz
        </h1>
      </TitleWrapper>

      <Glass width='100%' content left>
        <AlertContainer>
          <AlertTitle>사용 방법</AlertTitle>
          <ul>
            <li>노래를 듣고 10초 안에 노래제목을 맞추는 게임입니다.</li>
            <li>6초에 힌트가 나가니 참고해주세요.</li>
            <li>대소문자 구분과 공백, 특수문자는 무시합니다.</li>
            <li id='tip'>
              🚩 정답이 <span>Crazy Over You</span>일 때,
              <br />
              <span>crazyoveryou</span> 혹은 <span>크레이지오버유</span>으로
              제출해도 정답 처리합니다.
            </li>
          </ul>
        </AlertContainer>
        <AlertContainer>
          <AlertTitle blue>개발 예정 리스트</AlertTitle>
          <ul>
            <li>년도별 top 100</li>
            <li>가수 (검색 지원)</li>
          </ul>
        </AlertContainer>

        <Button links={'/start'}>start</Button>
      </Glass>
    </GlassContainer>
  );
};
export default LandingPage;
