import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedInResponse = await axios.get('/api/user/auth');
    setLoggedIn(loggedInResponse.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={[loggedIn, getLoggedIn]}>
      {props.children}
    </AuthContext.Provider>
  );
}
