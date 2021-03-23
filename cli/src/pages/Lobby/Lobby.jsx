import React, { useState } from 'react';
import styled from 'styled-components';
import ChooseOptions from '../LandingPage/section/ChooseOptions/ChooseOptions';
import Center from '../../components/Center/Center';
import Player from './Section/Player';
import { SCREEN, WIDTH } from '../../constants/theme';

const Row = styled.div`
  width: 100%;
  max-width: ${WIDTH.tablet};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${SCREEN.tablet} {
    flex-direction: row;
  }
`;

const Lobby = () => {
  const [inputName, setInputName] = useState('');

  return (
    <Center landing>
      <Row>
        <Player onNameSubmit={setInputName} onNameValue={inputName} />
        <ChooseOptions multi />
      </Row>
    </Center>
  );
};

export default Lobby;
