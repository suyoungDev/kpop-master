import React from 'react';

import Heart from '../Heart/Heart';
import SeeMoreButtonContainer from './SeeMoreButtonContainer';
import CommentWriterContainer from './CommentWriterContainer';
import CommentContent from './CommentContent';
import { ColumnWrapper, RowContainer } from './SingleComment.styles';

const Comment = ({
  toWhat,
  writer,
  userId,
  deleteComment,
  createdAt,
  quantityOfComment,
  toggleReplyList,
  content,
  toggleToWrite,
  isOpenWrite,
}) => {
  if (!writer) return null;
  if (!userId) return null;

  return (
    <RowContainer>
      <Heart toWhat={toWhat} />

      <ColumnWrapper>
        <CommentWriterContainer
          wirterName={writer.displayName}
          userId={userId}
          writerId={writer._id}
          deleteComment={deleteComment}
          createdAt={createdAt}
        />

        <CommentContent>{content}</CommentContent>

        <SeeMoreButtonContainer
          toggleReplyList={toggleReplyList}
          isOpenWrite={isOpenWrite}
          quantityOfComment={quantityOfComment}
          handleClick={toggleToWrite}
        />
      </ColumnWrapper>
    </RowContainer>
  );
};

export default Comment;
