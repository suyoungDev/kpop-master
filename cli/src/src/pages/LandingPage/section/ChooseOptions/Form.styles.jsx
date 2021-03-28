import styled from 'styled-components';
import { COLORS, FONT, SCREEN } from '../../../../constants/theme';

export const Form = styled.form`
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : '')};
  justify-content: center;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  transition: all 0.5s linear;

  :not(:first-child) {
    margin: 2rem 0 0 0;
  }
  :last-child {
    margin: 0;
  }

  @media ${SCREEN.laptop} {
    :first-child {
      margin-top: 0;
    }
  }
`;

export const Title = styled.span`
  width: 100px;
  display: flex;
  margin-bottom: 0.7rem;
  align-items: center;
  font-family: ${FONT.korean};
  font-weight: 200;
  color: ${COLORS.headingDarkGray};
  cursor: ${({ tippy }) => (tippy ? 'help' : 'default')};

  .icon {
    margin-left: 0.4rem;
    color: ${COLORS.primaryTwo};
  }

  &:hover {
    color: ${({ tippy }) => (tippy ? `${COLORS.primaryPoint}` : '')};
    .icon {
      color: ${COLORS.primaryPoint};
    }
  }
`;

export const Wrapper = styled.div`
  display: ${({ center }) => (center ? 'flex' : '')};
  justify-content: ${({ center }) => (center ? 'center' : '')};
  align-items: ${({ center }) => (center ? 'center' : '')};

  margin: 2rem 0 0 0;
`;
