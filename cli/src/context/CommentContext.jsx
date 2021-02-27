import React, { useState, createContext } from 'react';
import axios from 'axios';

export const CommentContext = createContext();

export const CommenttProvider = (props) => {
  const [commnetList, setCommnetList] = useState([]);

  const getCommentAll = async () => {
    const response = await axios.get('/api/comment/getComments');
    setCommnetList(response.data.comments);
  };

  return (
    <CommentContext.Provider value={[getCommentAll, commnetList]}>
      {props.children}
    </CommentContext.Provider>
  );
};
