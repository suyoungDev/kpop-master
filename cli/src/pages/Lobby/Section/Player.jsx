import React, { useState } from 'react';
import CleanCard from '../../../components/Card/CleanCard';
import useInput from '../../../hook/useInput';
import { Form } from '../../LandingPage/section/ChooseOptions/Form/Form';

const Player = () => {
  const [inputName, setInputName] = useInput('');
  const [isNameSubmit, setisNameSubmit] = useState(false);

  return (
    <CleanCard rank>
      {isNameSubmit ? (
        inputName
      ) : (
        <Form onSubmit={() => setisNameSubmit(true)}>
          <input
            type='text'
            placeholder='이름'
            onChange={setInputName}
            value={inputName}
          />
        </Form>
      )}
    </CleanCard>
  );
};

export default Player;
