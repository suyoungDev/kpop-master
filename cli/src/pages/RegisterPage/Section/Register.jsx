import React, { useState, useCallback } from 'react';
import FormInput from '../../../components/FormInput/FormInput';
import CustomButton from '../../../components/CustomButton/CustomButton';

const Register = () => {
  const [inputs, setInputs] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setInputs({ ...inputs, [name]: value });
    },
    [inputs]
  );

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
    <div>
      <h2>회원가입</h2>
      <span>메일주소와 비밀번호로 회원가입합니다.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='display name'
          require
        />

        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='email'
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
    </div>
  );
};

export default Register;
