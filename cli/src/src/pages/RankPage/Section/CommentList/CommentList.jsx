import React from 'react';
import SingleComment from '../SingleComment/SingleComment';

const CommentList = ({ commentListData }) => {
  return (
    <>
      {commentListData &&
        commentListData.map(
          (comment) =>
            !comment.toWhom && (
              <SingleComment
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
