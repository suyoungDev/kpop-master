import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  background-color: gray;
`;

const LoadingBar = () => {
  const now = '';

  useEffect(() => {
    now = new Date();
  }, []);

  return (
    <Loading>
      <div>hi</div>
      <p>{now}</p>
    </Loading>
  );
};

export default LoadingBar;
