import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT, SIZES, SCREEN } from '../../constants/theme';
import Snippet from '../Snippet/Snippet';

const Container = styled.div`
  width: 380px;
  height: 140px;
  border-radius: ${SIZES.radiusSmall};
  padding: 0.8rem;

  box-shadow: 0 4px 7px 0 ${COLORS.grayLight};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: start;

  font-family: ${FONT.korean};
  font-weight: 200;
  color: ${COLORS.textDark};

  background: white;
  border: 1px solid ${COLORS.grayMiddle};

  @media ${SCREEN.tablet} {
    width: 250px;
    height: 300px;
  }

  @media ${SCREEN.desktop} {
    width: 381px;
    height: 200px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  color: ${COLORS.grayDeepDark};
  margin-bottom: 0.7rem;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  color: ${COLORS.textDark};
  font-size: 15px;
  padding-left: 0.7rem;
`;

const Card = ({ children, alert, title, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <Header>
        <Snippet {...otherProps}>{alert}</Snippet>
        {title}
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
