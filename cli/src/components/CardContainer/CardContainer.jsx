import styled from 'styled-components';
import { SCREEN } from '../../constants/theme';

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${SCREEN.tablet} {
    flex-direction: row;
    margin: 2rem;
  }
`;

export default CardContainer;
