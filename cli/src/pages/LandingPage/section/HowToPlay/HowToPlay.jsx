import React from 'react';

import Card from '../../../../components/Card/Card';

const HowToPlay = () => {
  return (
    <Card alert='플레이 방법'>
      <ul>
        <li>노래를 듣고 20초 안에 노래제목을 맞추는 미니 게임입니다.</li>
        <li>10초에 힌트가 나가니 참고해주세요.</li>
        <li>대소문자 구분과 공백, 특수문자는 무시합니다.</li>
      </ul>
    </Card>
  );
};

export default HowToPlay;
