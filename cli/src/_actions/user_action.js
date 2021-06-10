import axios from 'axios';
import ActionTypes from './types';

export const loginUser = async (dataToSubmit) => {
  const { data } = await axios.post('/api/user/login', dataToSubmit);

  return {
    type: ActionTypes.LOGIN_USER,
    payload: data,
  };
};

export const registerUser = async (dataToSubmit) => {
  const { data } = await axios.post('/api/user/register', dataToSubmit);

  return {
    type: ActionTypes.REGISTER_USER,
    payload: data,
  };
};

export const auth = async () => {
  const { data } = await axios.get('/api/user/auth');

  return {
    type: ActionTypes.AUTH_USER,
    payload: { data },
  };
};
