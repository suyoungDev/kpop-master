import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './Button.css';

const LinkContainer = styled(Link)`
  display: flex;
`;

const Button = ({ children, links }) => {
  return (
    <LinkContainer className='button-wrapper' to={links}>
      <label>{children}</label>
    </LinkContainer>
  );
};

export default Button;
