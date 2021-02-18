import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS, FONT } from '../../constants/theme';

const MenuStyles = css`
  display: flex;
  align-items: center;
  margin: 0 28px 0 0;
  font-family: ${FONT.korean};
  font-weight: 500;
  color: ${COLORS.textMid};
  font-size: 1.1rem;
  position: relative;

  .icon {
    margin-right: 10px;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    bottom: -22px;
    background: linear-gradient(
      to right,
      ${COLORS.primaryMiddle} 0%,
      ${COLORS.primary} 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  :hover {
    color: black;
    transition: color 0.2s ease-in-out;

    ::before {
      opacity: 1;
    }
  }

  @media (max-width: 1023px) {
    color: ${COLORS.textBlack};
    font-size: 1.3rem;
    margin: 1rem 0;

    ::before {
      bottom: -10px;
    }
  }
`;

const getLinkStyles = (props) => {
  if (props.menu) {
    return MenuStyles;
  }
};

const LinkContainer = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  ${getLinkStyles}
`;

const StyledLink = ({ children, ...props }) => {
  return <LinkContainer {...props}>{children}</LinkContainer>;
};

export default StyledLink;
