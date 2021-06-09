import React from 'react';
import CommentList from './CommentList';
import LoadingContainer from '../../../../components/LoadingContainer';

const CommentListContainer = ({ isCommentLoading, commnetList }) => {
  return (
    <LoadingContainer isLoading={isCommentLoading}>
      <CommentList commentListData={commnetList} />
    </LoadingContainer>
  );
};

export default CommentListContainer;
