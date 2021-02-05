import React from 'react';
import styled from 'styled-components';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

const Container = styled.div`
  width: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: right;
  text-align: right;
  font-family: 'Montserrat', sans-serif;
`;

const PassedQ = styled.p`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  margin-right: 0.4rem;
`;

const Span = styled.p`
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.4);
`;

const LeftQ = styled.p`
  position: relative;
  margin-top: 2rem;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.6);
`;

const QuizLeft = ({ passed, left }) => {
  return (
    <Container>
      <PassedQ>{passed}</PassedQ>
      <Span>/</Span>
      <LeftQ>{left}</LeftQ>
    </Container>
  );
};

export default QuizLeft;
