import React from 'react';
import styled from 'styled-components';
import { SCREEN, COLORS } from '../../../../constants/theme';

const Wrapper = styled.ul`
  width: 270px;
  height: 180px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3rem;
`;

const Log = styled.li`
  width: 100%;
  margin-top: 8px;

  font-family: 'nanum gothic';
  font-size: 14px;
  color: ${COLORS.textWhiteMid};
  text-align: left;

  list-style: none;

  @media ${SCREEN.tablet} {
    color: ${COLORS.textMid};
  }
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
