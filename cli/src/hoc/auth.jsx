import React, { useEffect } from 'react';
import { auth } from '../_actions/user_action';
import { useDispatch } from 'react-redux';

function Auth(SpecificComponent, option) {
  // null = 아무나 출입 가능
  // true = 로그인한 유저만 출입 가능
  // false = 로그인한 유저는 출입 불가능
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push('/login');
          }
        } else {
          if (option === false) props.history.push('/');
        }
      });

      // eslint-disable-next-line
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}

export default Auth;
