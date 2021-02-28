import React, { useState, createContext } from 'react';
import axios from 'axios';

export const CommentContext = createContext();

export const CommenttProvider = (props) => {
  const [commnetList, setCommnetList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCommentAll = async () => {
    setIsLoading(true);
    const response = await axios.get('/api/comment/getComments');
    setCommnetList(response.data.comments);
    setIsLoading(false);
  };

  return (
    <CommentContext.Provider value={[getCommentAll, commnetList, isLoading]}>
      {props.children}
    </CommentContext.Provider>
  );
};
