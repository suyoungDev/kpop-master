import React from 'react';
import styled from 'styled-components';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

const Container = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: row;
`;

const PassedQ = styled.p`
  font-size: ${SIZES.largeTitle}px;
  color: ${COLORS.black};
  padding-right: ${SIZES.base}px;
  font-family: '${FONTS.gameTitle}';
  padding-bottom: 20px;
`;
const LeftQ = styled.p`
  font-size: ${SIZES.h1}px;
  color: ${COLORS.slateGray};
  padding-left: ${SIZES.base}px;
  font-family: '${FONTS.gameTitle}';
`;

const QuizLeft = ({ passed, left }) => {
  return (
    <Container>
      <PassedQ>{passed}</PassedQ>/<LeftQ>{left}</LeftQ>
    </Container>
  );
};

export default QuizLeft;
