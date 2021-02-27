import React from 'react';
import SingleComment from '../SingleComment/SingleComment';

const CommentList = ({ commentListData, getComments }) => {
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
                toWhom={comment._id}
                key={comment._id}
                getComments={getComments}
              />
            )
        )}
    </>
  );
};

export default CommentList;
