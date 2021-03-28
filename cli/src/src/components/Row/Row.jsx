import styled, { css } from 'styled-components';
import { SCREEN, SIZES } from '../../constants/theme';

const mainStyles = css`
  width: 80%;
  padding: 0 0 2rem 0;
  justify-content: space-between;

  img {
    display: none;
  }

  @media ${SCREEN.tablet} {
    width: ${SIZES.tabletWidth};
    justify-content: start;
    padding: 0;

    img {
      display: none;
      position: relative;
      width: 200px;
    }
  }

  @media ${SCREEN.laptop} {
    width: 85%;
    max-width: ${SIZES.laptopWidth};
    justify-content: space-between;

    align-items: center;

    img {
      display: flex;
      width: auto;
    }
  }
`;

const mainCardStyles = css`
  flex-direction: column;
  align-items: center;

  @media ${SCREEN.tablet} {
    margin-bottom: 2rem;
  }

  @media ${SCREEN.laptop} {
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 80%;
    max-width: ${SIZES.laptopWidth};
  }
`;

const getStyles = (props) => {
  if (props.main) return mainStyles;
  if (props.mainCard) return mainCardStyles;
};

const Row = styled.div`
  width: 100%;
  padding: 1rem 0 0 0;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  ${getStyles};
`;

export default Row;
