import React from 'react';
import CleanCard from '../../../../components/Card/CleanCard';
import {
  Radio,
  RadioLabel,
  RadioRowContainer,
} from '../ChooseOptions/Radio/Radio';
import { Form } from '../ChooseOptions/Form/Form';

const SoloOrTeam = ({ getWithWhom }) => {
  const getMulti = (e) => {
    getWithWhom(e.target.value);
  };

  return (
    <CleanCard options>
      <Form onClick={getMulti}>
        <RadioRowContainer multi>
          <Radio type='radio' value='solo' id='solo' name='with' />
          <RadioLabel htmlFor='solo'>혼자 하기</RadioLabel>
          <Radio type='radio' value='multi' id='multi' name='with' />
          <RadioLabel htmlFor='multi'>친구와 하기</RadioLabel>
        </RadioRowContainer>
      </Form>
    </CleanCard>
  );
};

export default SoloOrTeam;
