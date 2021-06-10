import React from 'react';

import DeleteComment from './DeleteComment';
import WriterInfoContainer from './WriterInfoContainer';
import { RowBox } from './SingleComment.styles';

const CommentWriterContainer = ({
  wirterName,
  userId,
  writerId,
  deleteComment,
  createdAt,
}) => {
  return (
    <RowBox>
      <WriterInfoContainer wirterName={wirterName} createdAt={createdAt} />
      <DeleteComment
        userId={userId}
        writerId={writerId}
        deleteComment={deleteComment}
      />
    </RowBox>
  );
};

export default CommentWriterContainer;
