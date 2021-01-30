import React from 'react';
import styled from 'styled-components';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Log = styled.p`
  margin-top: ${SIZES.base}px;
  color: ${COLORS.darkGray};
  font-family: ${FONTS.engBody};
  font-size: ${SIZES.font}px;
  text-align: left;
`;

const LogList = ({ giveAnswers }) => {
  return (
    <Wrapper>
      {giveAnswers
        .filter((answer, idx) => idx < 5)
        .map((answer, idx) => (
          <Log key={idx}>{answer}</Log>
        ))}
    </Wrapper>
  );
};

export default LogList;
