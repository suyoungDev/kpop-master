import React from 'react';
import styled from 'styled-components';
import ChooseOptions from '../LandingPage/section/ChooseOptions/ChooseOptions';
import Center from '../../components/Center/Center';
import Player from './Section/Player';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Lobby = () => {
  return (
    <Center landing>
      <Row>
        <ChooseOptions multi />
        <Player />
      </Row>
    </Center>
  );
};

export default Lobby;
