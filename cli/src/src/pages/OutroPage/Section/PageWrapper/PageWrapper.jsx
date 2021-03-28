import styled from 'styled-components';
import { SIZES, SCREEN } from '../../../../constants/theme';

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${SCREEN} {
    width: 95%;
    max-width: ${SIZES.laptopWidth};
  }
`;

export default PageWrapper;
