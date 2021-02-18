import styled from 'styled-components';
import { SIZES, SCREEN } from '../../constants/theme';

const RoundContainer = styled.div`
  width: 100%;
  height: inherit;
  background: ${({ bgcolor }) => (bgcolor ? `${bgcolor}` : '#ffffff')};
  border-top-left-radius: ${SIZES.radiusBig};
  border-top-right-radius: ${SIZES.radiusBig};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1.7rem;

  @media ${SCREEN.tablet} {
    height: ${({ main }) => (main ? '' : '210px')};

    #three {
      order: 3;
    }
    #two {
      order: 2;
    }
  }
`;

export default RoundContainer;
