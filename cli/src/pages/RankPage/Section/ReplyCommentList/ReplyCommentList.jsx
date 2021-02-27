import React from 'react';
import ReplyComment from '../ReplyComment/ReplyComment';

const ReplyCommentList = ({ parrentId, commentListData, currentUser }) => {
  return (
    <div>
      {commentListData.map(
        (comment, index) =>
          comment.toWhom === parrentId && (
            <ReplyComment
              key={index}
              data={comment}
              currentUser={currentUser}
            />
          )
      )}
    </div>
  );
};

export default ReplyCommentList;
