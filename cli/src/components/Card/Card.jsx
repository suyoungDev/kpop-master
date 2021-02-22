import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT, SIZES, SCREEN } from '../../constants/theme';
import Snippet from '../Snippet/Snippet';

const Container = styled.div`
  width: 90%;
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
  color: ${COLORS.headingDarkGray};

  background: white;
  border: 1px solid ${COLORS.shadowLight};
  transition: 0.3s ease;

  &:nth-child(1) {
    margin: 0 0 1rem 0;

    @media ${SCREEN.tablet} {
      margin: 0 1rem 0 0;
    }
  }

  ul {
    margin: 0.5rem 0;
    font-size: 14px;
    line-height: 1.4rem;
    list-style: none;

    #tip {
      color: ${COLORS.contentGrayLight};
      padding-left: 0.4rem;

      span {
        color: ${COLORS.headingDarkGray};
        background: ${COLORS.primaryShaodw};
        padding: 2px 4px;
      }
    }
  }

  :hover {
    box-shadow: 0 8px 16px 0 ${COLORS.shadowDark};
  }

  @media ${SCREEN.tablet} {
    width: 300px;
    height: 330px;
  }

  @media ${SCREEN.laptop} {
    width: 450px;
    height: 280px;
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
