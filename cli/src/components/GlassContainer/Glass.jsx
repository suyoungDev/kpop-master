import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${({ width }) => (width ? `${width}` : `95vw`)};
  max-width: 30rem;
  height: ${({ height }) => height && `${height}`};

  padding: ${({ content }) => content && '2rem'};

  display: flex;
  flex-direction: column;
  align-items: ${({ left }) => (left ? 'flex-start' : 'center')};
  justify-content: ${({ evenly }) => (evenly ? 'space-evenly' : 'center')};

  background: rgba(255, 255, 255, 0);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.37) 100%
  );
  box-shadow: 0 8px 32px 0 rgba(111, 113, 136, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.233);
`;

const Glass = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

export default Glass;
