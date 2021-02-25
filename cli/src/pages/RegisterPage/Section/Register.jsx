import React from 'react';
import axios from 'axios';
import FormInput from '../../../components/FormInput/FormInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import useMultiInputs from '../../../hook/useMultiInputs';
import { Container, Title, Span } from './LogIn.styles';

const Register = () => {
  const [inputs, handleChange] = useMultiInputs({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, confirmPassword } = inputs;

    if (password !== confirmPassword) {
      alert('비밀번호를 확인해 주세요');
      return;
    }

    const registerUser = async () => {
      const response = await axios.post('/api/user/register', inputs);
      console.log(response);
      if (response.data.DBsuccess === false) {
        alert('이미 존재하는 메일입니다.');
      }
    };

    registerUser();
  };

  const { displayName, email, password, confirmPassword } = inputs;

  return (
    <Container>
      <Title>회원가입</Title>
      <Span>메일주소와 비밀번호로 회원가입합니다.</Span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='닉네임'
          require
        />

        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='이메일'
          require
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='비밀번호'
          minLength='5'
          require
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='비밀번호 확인'
          minLength='5'
          require
        />

        <CustomButton type='submit'>가입하기</CustomButton>
      </form>
    </Container>
  );
};

export default Register;
