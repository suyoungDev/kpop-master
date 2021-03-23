import React, { useState, useRef } from 'react';
import CleanCard from '../../../components/Card/CleanCard';
import useInput from '../../../hook/useInput';
import { Form } from '../../LandingPage/section/ChooseOptions/Form/Form';

const Player = ({ onNameSubmit }) => {
  const [inputName, setInputName] = useInput('');
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameSubmit(nameRef.current.value);
  };

  return (
    <CleanCard rank>
      <Form onSubmit={handleSubmit}>
        <input type='text' placeholder='이름' ref={nameRef} required />
        <button type='submit'>이름 생성</button>
      </Form>
    </CleanCard>
  );
};

export default Player;
