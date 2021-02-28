import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT, SIZES, SCREEN } from '../../constants/theme';
import Snippet from '../Snippet/Snippet';

const Container = styled.div`
  width: 90%;
  max-width: 450px;
  border-radius: ${SIZES.radiusSmall};
  padding: 1.2rem;
  box-shadow: 0 4px 8px 0 ${COLORS.shadowLight};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: start;

  font-family: ${FONT.korean};
  font-weight: 200;

  background: white;
  border: 1px solid ${COLORS.shadowLight};
  transition: 0.3s ease;

  ul {
    margin: 0.5rem 0;
    font-size: 14px;
    line-height: 1.7rem;
    list-style: none;
    color: ${COLORS.headingDarkGray};
  }

  :hover {
    box-shadow: 0 8px 16px 0 ${COLORS.shadowDark};
  }

  @media ${SCREEN.laptop} {
    width: 400px;
    height: 300px;
    :first-child {
      margin-right: 1.5rem;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.contentGrayLight};
  margin-bottom: 0.6rem;
  font-size: 14px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  color: ${COLORS.headingDarkGray};
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
