import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import WriteComment from './WriteComment';

const WriteCommentContainer = () => {
  const [isLoggedIn] = useContext(AuthContext);

  if (!isLoggedIn) return null;

  return <WriteComment />;
};

export default WriteCommentContainer;
