import styled from 'styled-components';
import { COLORS, SCREEN } from '../../../constants/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  &:last-child {
    margin-top: 3rem;
  }

  @media ${SCREEN.tablet} {
    width: 300px;
    margin-top: 0;

    &:last-child {
      margin-top: 0;
    }
  }

  @media ${SCREEN.laptop} {
    width: 400px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 0.4rem;
  @media ${SCREEN.tablet} {
    width: 300px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  button:first-child {
    margin-right: 1.4rem;
  }

  @media ${SCREEN.tablet} {
    justify-content: space-between;
    button:first-child {
      margin-right: 0.2rem;
    }
  }

  @media screen and (max-width: 300px) {
    flex-direction: column;
    button:first-child {
      margin: 0 0 1rem 0;
    }
  }
`;

export const Span = styled.span`
  color: ${COLORS.contentGray};
`;
