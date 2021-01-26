import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
  width: 200px;
  height: 200px;
  padding: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    153deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

const AlbumArt = () => {
  return <Square />;
};

export default AlbumArt;
