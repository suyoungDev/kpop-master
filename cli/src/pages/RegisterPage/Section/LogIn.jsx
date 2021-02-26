import React, { useReducer } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import FormInput from '../../../components/FormInput/FormInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { Container, ButtonContainer, Title, Span } from './LogIn.styles';

import useMultiInputs from '../../../hook/useMultiInputs';
import { signInWithGoogle } from '../../../firebase/firebase.utils';

const LogIn = (props) => {
  const [inputs, handleChange] = useMultiInputs({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post('/api/user/login', inputs);
    if (!response.data.loginSuccess) return alert(response.data.message);
    props.history.push('/');
  };

  return (
    <Container>
      <Title>계정이 이미 있습니다.</Title>
      <Span>이메일과 비밀번호로 로그인합니다.</Span>

      <form onSubmit={handleSubmit}>
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
          <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>
            구글 계정으로 로그인
          </CustomButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default withRouter(LogIn);
