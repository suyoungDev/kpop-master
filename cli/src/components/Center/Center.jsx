import styled from 'styled-components';
import { SCREEN } from '../../constants/theme';

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ bgcolor }) => (bgcolor ? `${bgcolor}` : 'transparent')};

  @media ${SCREEN.tablet} {
    background: #ffffff;
    border: 1px solid green;

    #first {
      order: 1;
    }
    #second {
      order: 2;
    }
    #third {
      order: 3;
    }
    #four {
      order: 4;
    }
  }
`;

export default Center;
