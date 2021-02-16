import styled from 'styled-components';
import { SCREEN } from '../../constants/theme';

const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-end;

  justify-content: ${({ main }) => (main ? 'space-between' : 'center')};

  padding: ${({ main }) => (main ? '2rem' : '1rem 0 0 0')};

  img {
    display: none;
    transition: width 1s ease;
  }

  @media ${SCREEN.tablet} {
    width: 600px;
    justify-content: start;
    padding: 0;

    img {
      display: block;
      position: relative;
      width: 200px;
    }
  }

  @media ${SCREEN.laptop} {
    width: ${({ main }) => (main ? '80%' : '85%')};
    max-width: 916px;
    align-items: center;
    padding: ${({ main }) => (main ? '3rem 0 0 0' : '0 0 0 0')};

    img {
      display: flex;
      width: auto;
    }
  }
`;

export default Row;
