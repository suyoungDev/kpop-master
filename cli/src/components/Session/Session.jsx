import React from 'react';
import styled from 'styled-components';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Log = styled.p`
  margin-top: ${SIZES.base}px;
  color: ${COLORS.darkGray};
  font-family: ${FONTS.engBody};
  font-size: ${SIZES.font}px;
`;

const Session = ({ resultList }) => {
  return (
    <Wrapper key={resultList.id}>
      {resultList.map((item) => (
        <Log>{item.result ? '✔' : '✖'}</Log>
      ))}
    </Wrapper>
  );
};

export default Session;
