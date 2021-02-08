import React from 'react';
import styled from 'styled-components';
import { SIZES, FONTS } from '../../constants/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Log = styled.p`
  width: 15rem;
  margin-top: ${SIZES.base}px;
  color: rgba(0, 0, 0, 0.7);
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
