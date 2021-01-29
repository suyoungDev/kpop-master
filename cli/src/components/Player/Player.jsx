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
    <React.Fragment>
      <Wrapper>
        <ReactPlayer url={url} playing='true' controls='false' />
      </Wrapper>
    </React.Fragment>
  );
};

export default Player;
