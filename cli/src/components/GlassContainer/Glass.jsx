import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${({ width }) => (width ? `${width}rem` : `95vw`)};
  max-width: 30rem;

  height: ${({ height }) => height && `${height}rem`};

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;

  background: rgba(255, 255, 255, 0);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.116) 0%,
    rgba(255, 255, 255, 0.507) 100%
  );
  box-shadow: 0 8px 32px 0 rgba(111, 113, 136, 0.37);
  backdrop-filter: blur(14.5px);
  -webkit-backdrop-filter: blur(14.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.233);

  display: flex;
  align-items: center;
`;

const Glass = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

export default Glass;
