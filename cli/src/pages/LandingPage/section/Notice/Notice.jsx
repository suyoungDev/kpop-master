import React from 'react';
import styled from 'styled-components';

import Card from '../../../../components/Card/Card';
import { COLORS } from '../../../../constants/theme';

const Block = styled.span`
  background-color: ${COLORS.lightSkyGray};
  padding: 5px 7px;
  border-radius: 5px;
`;

const Notice = () => {
  return (
    <Card alert='미리 알림' secondary>
      <ul>
        <li>유튜브에서 자동으로 노래를 검색해서 가져옵니다.</li>
        <li>만약 뮤비를 가져오는 경우, 도입부에 공백이 있을 수도 있습니다.</li>
        <li>
          <Block>예시: 아이유 - 에잇</Block>
        </li>
      </ul>
    </Card>
  );
};

export default Notice;
