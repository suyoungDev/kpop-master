import styled from 'styled-components';
import { SCREEN, SIZES } from '../../constants/theme';

const Row = styled.div`
  width: 100%;
  padding: ${({ main }) => (main ? '2rem' : '1rem 0 0 0')};

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: ${({ main }) => (main ? 'space-between' : 'center')};

  img {
    display: none;
    transition: width 1s ease;
  }

  @media ${SCREEN.tablet} {
    width: ${SIZES.tabletWidth};
    justify-content: start;
    padding: ${({ main }) => (main ? '1rem 0 0 0' : '0')};

    img {
      display: block;
      position: relative;
      width: 200px;
    }
  }

  @media ${SCREEN.laptop} {
    width: ${({ main }) => (main ? '80%' : '85%')};
    max-width: ${SIZES.laptopWidth};
    align-items: center;
    padding: ${({ main }) => (main ? '1rem 0 0 0' : '0 0 0 0')};

    img {
      display: flex;
      width: auto;
    }
  }
`;

export default Row;
