import React from 'react';
import { Content, RowBox } from './SingleComment.styles';

const CommentContent = ({ children }) => {
  return (
    <RowBox>
      <Content>{children}</Content>
    </RowBox>
  );
};

export default CommentContent;
