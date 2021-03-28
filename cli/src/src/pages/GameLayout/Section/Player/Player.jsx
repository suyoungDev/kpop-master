import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 0px;
  height: 0px;
`;

const Player = ({ url }) => {
  return (
    <Wrapper>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${url}`} playing />
    </Wrapper>
  );
};

export default Player;
