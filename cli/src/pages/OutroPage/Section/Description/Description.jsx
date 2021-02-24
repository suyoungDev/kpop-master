import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { SIZES } from '../../../../constants/theme';

import levelImage from '../../../../constants/image/outroImage/level';

import { TrackListToPlayContext } from '../../../../context/TrackListToPlayContext';

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
  const [myLimit, setMyLimit] = useState('');
  const [trackListToPlay] = useContext(TrackListToPlayContext);

  const getMyLevel = () => {
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
  };

  const getMyLimit = () => {
    if (trackListToPlay.theme.limit === 10) {
      setMyLimit('쉬운');
    } else if (trackListToPlay.theme.limit === 50) {
      setMyLimit('보통의');
    } else {
      setMyLimit('어려운');
    }
  };

  useEffect(() => {
    getMyLevel();
    getMyLimit();
    // eslint-disable-next-line
  }, []);

  const levelDescription = {
    zero:
      '가요를 정말 아무것도 모르시군요! 이번 기회에 한번 들어보는 건 어때요?',
    one:
      '유명한 노래는 조금은 알고는 있지만, 힌트가 주어져야 간신히 눈치채는 머글이에요!',
    two:
      '가요에 관심이 있긴 하지만, 잘 알고 있는 편은 아니에요. 듣는 곡만 듣는 편인거 같군요',
    three:
      '가요에 푹 빠져있어요. 유명한 곡은 수십번 들어봤을 정도로 관심도 많고, 더 알고 싶어 하는 팬심도 가지고 있죠!',
    four: '당신은 모든 노래를 알고 있어요. 부족한 건 타이핑 속도뿐!',
    five:
      '당신은 모든 노래를 거의 첫음만 듣고 알아챌 정도로 알고 있군요! 혹시 업계 종사자이신가요?',
  };

  return (
    <Wrapper>
      <img
        src={levelImage[myLevel]}
        alt='해당 레벨을 설명하는 그림'
        width='300'
      />
      <span>{myLimit} 난이도로</span>

      {trackListToPlay.theme.theme === 'year' && (
        <span>
          {trackListToPlay.theme.value}년대 음악이라면 잘 알고있다고 게임을
          즐겼어요.
        </span>
      )}

      {trackListToPlay.theme.theme === 'artist' && (
        <span>
          {trackListToPlay.theme.value}의 음악이라면 내가 다 알고 있다!
        </span>
      )}

      {trackListToPlay.theme.theme === 'weekly' && (
        <span> 트렌드에 승부를 걸겠다! 이번주 노래로 게임을 즐겼어요.</span>
      )}
      <Descript>{levelDescription[myLevel]}</Descript>
    </Wrapper>
  );
};

export default Description;
