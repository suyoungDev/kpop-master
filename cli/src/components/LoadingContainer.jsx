import React from 'react';
import Spinner from './Spinner/Spinner';

const LoadingContainer = ({ isLoading, children }) => {
  if (isLoading) return <Spinner />;

  return <React.Fragment>{children}</React.Fragment>;
};

export default LoadingContainer;
