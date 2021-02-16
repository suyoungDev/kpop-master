import React from 'react';
import styled from 'styled-components';
import { SCREEN, COLORS } from '../../../../constants/theme';

const Wrapper = styled.ul`
  width: 100%;
  max-width: 300px;
  height: 250px;

  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  @media ${SCREEN.tablet} {
    width: 100%;
    max-width: none;
    margin-top: 0.4rem;
    padding: 2rem 2.4rem;
  }
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
    color: ${COLORS.grayDeepDark};
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
