import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  async function getIsLoggedIn() {
    const response = await axios.get('/api/user/auth');
    setIsLoggedIn(response.data.isAuth);
  }

  useEffect(() => {
    getIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={[isLoggedIn, getIsLoggedIn]}>
      {props.children}
    </AuthContext.Provider>
  );
}
