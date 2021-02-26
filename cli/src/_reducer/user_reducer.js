import ActionTypes from '../_actions/types';

const initialState = {};

const userReucer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, success: action.payload };

    case ActionTypes.REGISTER_USER:
      return { ...state, success: action.payload };

    case ActionTypes.AUTH_USER:
      return { ...state, userData: action.payload };

    default:
      return state;
  }
};

export default userReucer;
