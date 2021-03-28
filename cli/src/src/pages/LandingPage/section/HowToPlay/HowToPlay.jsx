import React from 'react';
import styled from 'styled-components';

import Card from '../../../../components/Card/Card';
import { COLORS } from '../../../../constants/theme';

const Block = styled.span`
  background-color: ${COLORS.lightSkyGray};
  padding: 5px 7px;
  border-radius: 5px;
`;

const HowToPlay = () => {
  return (
    <Card alert='플레이 방법'>
      <ul>
        <li>노래를 듣고 20초 안에 노래 제목을 맞추는 게임입니다.</li>
        <li>10초에 힌트가 나가니 참고해주세요.</li>
        <li>대소문자 구분과 공백, 특수문자는 무시합니다.</li>
        <li>총 라운드는 5회입니다.</li>
        <li>
          <Block>!!</Block> 을 입력하면, 다음 라운드로 넘어갑니다.
        </li>
      </ul>
    </Card>
  );
};

export default HowToPlay;
