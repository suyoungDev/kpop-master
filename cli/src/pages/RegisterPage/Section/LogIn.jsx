import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

import FormInput from '../../../components/FormInput/FormInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { Container, ButtonContainer, Title, Span } from './LogIn.styles';

import useMultiInputs from '../../../hook/useMultiInputs';
import { AuthContext } from '../../../context/AuthContext';

const LogIn = (props) => {
  // eslint-disable-next-line
  const [isLoggedIn, getIsLoggedIn] = useContext(AuthContext);
  const [inputs, handleChange] = useMultiInputs({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(loginUser(inputs)).then((res) => {
      if (!res.payload.success) {
        return alert(res.payload.message);
      }
      props.history.push('/');
      getIsLoggedIn();
    });
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
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default withRouter(LogIn);
