import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SIZES } from '../../../../constants/theme';

import levelImage from '../../../../constants/image/outroImage/level';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Descript = styled.div`
  width: 95%;
  max-width: ${SIZES.tabletWidth};
  margin-top: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: black;
  line-height: 23px;
  text-align: center;
  font-family: 'nanum gothic';
`;

const Description = ({ averageResponseTime }) => {
  const [myLevel, setMyLevel] = useState('');

  useEffect(() => {
    if (averageResponseTime < 5) {
      setMyLevel('five');
    } else if (averageResponseTime < 8) {
      setMyLevel('four');
    } else if (averageResponseTime < 10) {
      setMyLevel('three');
    } else if (averageResponseTime < 13) {
      setMyLevel('two');
    } else if (averageResponseTime < 16) {
      setMyLevel('one');
    } else {
      setMyLevel('zero');
    }

    // eslint-disable-next-line
  }, []);

  const levelDescription = {
    zero:
      '블랙핑크의 노래를 정말 아무것도 모르시군요! 이번 기회에 블랙핑크 노래를 들어보는 건 어때요?',
    one:
      '블랙핑크의 유명한 타이틀곡을 조금은 알고는 있지만, 힌트가 주어져야 간신히 눈치채는 머글이에요!',
    two:
      '블랙핑크의 앨범을 찾아서 들어 볼 정도로 관심은 있지만, 대표곡이 아닌 수록곡은 잘 모르는 입덕 초기 머글이에요!',
    three:
      '블랙핑크의 노래에 푹 빠져있어요. 대표곡도 수록곡도 대부분 알고 있고, 더 알고 싶어 하는 팬심도 가지고 있죠!',
    four:
      '진정한 블링크로 임명합니다! 당신은 모든 노래를 알고 있어요. 부족한 건 타이핑 속도뿐!',
    five:
      '당신은 모든 노래를 거의 첫음만 듣고 알아챌 정도로 알고 있군요! 혹시 블랙핑크 본인이신가요?',
  };

  return (
    <Wrapper>
      <img
        src={levelImage[myLevel]}
        alt='해당 레벨을 설명하는 그림'
        width='300'
      />
      <Descript>{levelDescription[myLevel]}</Descript>
    </Wrapper>
  );
};

export default Description;
