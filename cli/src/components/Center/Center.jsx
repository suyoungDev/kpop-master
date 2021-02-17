import styled from 'styled-components';
import { SCREEN } from '../../constants/theme';

const Center = styled.div`
  width: ${({ landing }) => (landing ? '100%' : '')};
  height: ${({ landing }) => (landing ? '' : '100vh')};

  display: flex;
  flex-direction: column;
  justify-content: ${({ inGame }) => (inGame ? 'center' : 'space-between')};
  align-items: center;

  background: ${({ bgcolor }) => (bgcolor ? `${bgcolor}` : 'transparent')};

  @media ${SCREEN.tablet} {
    background: #ffffff;

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
