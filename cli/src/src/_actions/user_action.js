import Axios from 'axios';
import ActionTypes from './types';

export function loginUser(dataToSubmit) {
  const request = Axios.post('/api/user/login', dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: ActionTypes.LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = Axios.post('/api/user/register', dataToSubmit).then(
    (response) => response.data
  );

  return {
    type: ActionTypes.REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = Axios.get('/api/user/auth').then((response) => response.data);

  return {
    type: ActionTypes.AUTH_USER,
    payload: request,
  };
}
