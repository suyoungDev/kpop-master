import React from 'react';
import styled from 'styled-components';
import { SCREEN, COLORS, SIZES } from '../../../../constants/theme';

const Wrapper = styled.ul`
  width: 100%;
  max-width: 360px;
  height: 150px;

  display: flex;
  flex-direction: column;
  padding: 1rem 1.3rem;

  @media ${SCREEN.tablet} {
    max-width: ${SIZES.gameLayoutMediumWidth};
    height: 250px;
    padding: 1.3rem;
    margin-top: 0rem;
  }
`;

const Log = styled.li`
  width: 100%;
  margin-bottom: 8px;

  font-family: 'nanum gothic';
  font-size: 14px;
  color: ${COLORS.textWhiteMid};
  text-align: left;

  list-style: none;

  @media ${SCREEN.tablet} {
    color: rgba(255, 255, 255, 0.7);
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
