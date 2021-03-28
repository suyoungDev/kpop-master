import styled from 'styled-components';

import { COLORS, FONT, SCREEN, SIZES } from '../../../../constants/theme';

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${SCREEN.tablet} {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .showHints {
    display: flex;
    align-self: flex-start;
    margin-bottom: 2rem;
  }

  #icon {
    margin-right: 5px;
  }
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.1rem;

  @media ${SCREEN.tablet} {
    width: ${SIZES.gameLayoutMediumWidth};
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${COLORS.headingDarkGray};
  font-family: ${FONT.english};
  font-size: 1.6rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 2px;
  flex-wrap: nowrap;
  color: ${COLORS.headingDarkGray};

  @media ${SCREEN.tablet} {
    width: ${SIZES.gameLayoutMediumWidth};
    font-size: 1.7rem;
  }
`;

export const ArtistName = styled.span`
  font-size: 12px;
  color: ${COLORS.contentGrayLight};
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 200;
  letter-spacing: 0;

  @media ${SCREEN.tablet} {
    margin-top: 1rem;
  }
`;
