import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './Button.css';

const LinkContainer = styled(Link)`
  display: flex;
`;

const Button = ({ child, links }) => {
  return (
    <LinkContainer className='container' to={links}>
      <label>{child}</label>
    </LinkContainer>
  );
};

export default Button;
