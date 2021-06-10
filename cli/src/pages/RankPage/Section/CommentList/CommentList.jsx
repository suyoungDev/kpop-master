import React from 'react';
import SingleCommentContainer from '../SingleComment/SingleCommentContainer';

const CommentList = ({ commentListData }) => {
  if (!commentListData) return null;

  // 답글말고 오리지널 댓글만 보여줌 (toWhom이 없는 것)
  return (
    <>
      {commentListData.map(
        (comment) =>
          !comment.toWhom && (
            <SingleCommentContainer
              content={comment.content}
              createdAt={comment.createdAt}
              writer={comment.writer}
              toWhat={comment._id}
              key={comment._id}
            />
          )
      )}
    </>
  );
};

export default CommentList;
