import React from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { Container, Title, Span } from './LogIn.styles';
import useMultiInputs from '../../../hook/useMultiInputs';

const Register = () => {
  const [inputs, handleChange] = useMultiInputs({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = inputs;

    if (password !== confirmPassword) {
      alert('비밀번호를 확인해 주세요');
      return;
    }
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
          require
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='비밀번호 확인'
          require
        />

        <CustomButton type='submit'>가입하기</CustomButton>
      </form>
    </Container>
  );
};

export default Register;
