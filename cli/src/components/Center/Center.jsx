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
  }
`;

export default Center;
