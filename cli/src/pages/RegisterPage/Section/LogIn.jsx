import React, { useState, useCallback } from 'react';

import FormInput from '../../../components/FormInput/FormInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { Container, ButtonContainer, Title, Span } from './LogIn.styles';
import useMultiInputs from '../../../hook/useMultiInputs';

const LogIn = () => {
  const [inputs, handleChange] = useMultiInputs({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  return (
    <Container>
      <Title>계정이 이미 있습니다.</Title>
      <Span>이메일과 비밀번호로 로그인합니다.</Span>

      <form>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='이메일'
          required
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='비밀번호'
          required
        />

        <ButtonContainer>
          <CustomButton type='submit'>로그인</CustomButton>
          <CustomButton type='button' isGoogleSignIn>
            구글 계정으로 로그인
          </CustomButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default LogIn;
