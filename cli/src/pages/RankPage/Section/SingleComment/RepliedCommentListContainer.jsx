import React from 'react';
import ReplyCommentList from './ReplyCommentList';

const RepliedCommentListContainer = ({
  isOpenWrite,
  parrentId,
  currentUser,
}) => {
  if (!isOpenWrite) return null;

  return <ReplyCommentList parrentId={parrentId} currentUser={currentUser} />;
};

export default RepliedCommentListContainer;
