import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import levelImage from '../../../../../constants/image/outroImage/level';

const Wrapper = styled.div`
  width: auto;
`;

const Descript = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  font-weight: 200;
  color: black;
  line-height: 20px;
  text-align: center;
  margin-top: 1rem;
`;

const Description = ({ averageResponseTime }) => {
  const [myLevel, setMyLevel] = useState('');

  useEffect(() => {
    if (averageResponseTime < 2) {
      setMyLevel('five');
    } else if (averageResponseTime < 4) {
      setMyLevel('four');
    } else if (averageResponseTime < 5.5) {
      setMyLevel('three');
    } else if (averageResponseTime < 7) {
      setMyLevel('two');
    } else if (averageResponseTime < 9) {
      setMyLevel('one');
    } else if (averageResponseTime < 10) {
      setMyLevel('zero');
    } else {
      setMyLevel('sorry');
    }

    // eslint-disable-next-line
  }, []);

  const levelDescription = {
    zero:
      '블랙핑크의 노래를 정말 아무것도 모르시네요. 이번기회에 블랙핑크에 빠져보는건 어때요?',
    one:
      '블랙핑크의 유명한 타이틀 곡을 조금은 알고는 있지만, 힌트가 주어져야 간신히 눈치채는 머글이에요!',
    two:
      '유명한 대표곡은 알지만, 알려지지 않은 수록곡은 잘 모르는 입덕 초기 머글이에요. 이번 기회에 수록곡도 한번 들어보는 건 어떨까요?',
    three:
      '블랙핑크의 노래에 푹 빠져있어요. 대표곡도 수록곡도 대부분 알고 있죠.',
    four:
      '진정한 블링크로 임명합니다! 당신은 모든 노래를 알고있어요. 부족한건 타이핑 속도 뿐!',
    five:
      '당신은 모든 노래를 거의 첫음만 듣고 알아챌 정도로 알고 있군요! 혹시 블랙핑크 본인이신가요? 와우!!!',
  };

  return (
    <Wrapper>
      <img src={levelImage[myLevel]} alt='description image' width='400' />
      <Descript>{levelDescription[myLevel]}</Descript>
    </Wrapper>
  );
};

export default Description;
