import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

const Wrapper = styled.div`
  margin-top: 250px;
  /* position: relative; */
  /* width: 0px;
  height: 0px;
  overflow: hidden; */
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
