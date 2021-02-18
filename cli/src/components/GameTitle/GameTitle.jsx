import styled, { css } from 'styled-components';
import { COLORS, SCREEN, FONT } from '../../constants/theme';

const landingStyles = css`
  width: 400px;
  height: auto;

  color: rgba(255, 255, 255, 0.56);
  text-shadow: -3px 3px 6px ${COLORS.primaryDark}, 0 0 0 ${COLORS.primaryLight};

  @media ${SCREEN.tablet} {
    font-size: 5.4rem;
    width: 600px;
    flex-wrap: nowrap;
    color: rgba(108, 99, 255, 0.8);
    text-shadow: 5px -5px 7px #fff, 0 0 0 ${COLORS.primaryDark};
  }
`;

const aboutStyles = css`
  margin-top: 1rem;
  color: rgba(108, 99, 255, 0.8);
  text-shadow: 5px -5px 7px #fff, 0 0 0 ${COLORS.primaryDark};
`;

const getTitleStyles = (props) => {
  if (props.about) return aboutStyles;
  if (props.landing) return landingStyles;
};

const TitleContainer = styled.div`
  text-align: left;
  font-size: 3.2rem;
  font-family: ${FONT.englishTitleCurv};
  font-weight: 700;
  letter-spacing: 2px;

  ${getTitleStyles}

  @media ${SCREEN.tablet} {
    font-size: 5.4rem;
  }
`;

const TitleWrapper = ({ children, ...props }) => {
  return <TitleContainer {...props}>{children}</TitleContainer>;
};

export default TitleWrapper;
