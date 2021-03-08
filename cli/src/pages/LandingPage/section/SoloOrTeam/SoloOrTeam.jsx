import React from 'react';
import CleanCard from '../../../../components/Card/CleanCard';
import {
  Radio,
  RadioLabel,
  RadioRowContainer,
} from '../ChooseOptions/Radio/Radio';
import { Form } from '../ChooseOptions/Form/Form';

const SoloOrTeam = ({ getWithWhom }) => {
  const getWith = (e) => {
    getWithWhom(e.target.value);
  };

  return (
    <CleanCard options>
      <Form onClick={getWith}>
        <RadioRowContainer getWith>
          <Radio type='radio' value='solo' id='solo' name='with' />
          <RadioLabel htmlFor='solo'>혼자 하기</RadioLabel>
          <Radio type='radio' value='team' id='team' name='with' />
          <RadioLabel htmlFor='team'>친구와 하기</RadioLabel>
        </RadioRowContainer>
      </Form>
    </CleanCard>
  );
};

export default SoloOrTeam;
