import React from 'react';
import { ReplyContainer, Column } from './SingleComment.styles';
import { Form, Button, CommentBox } from '../WriteComment/WriteComment.styles';

const ReplyCommentContainer = ({
  isOpen,
  isAuth,
  submit,
  inputValue,
  onChange,
  cancelToReply,
}) => {
  if (!isOpen) return null;
  if (!isAuth) return null;

  return (
    <ReplyContainer reply>
      <Form reply onSubmit={submit}>
        <CommentBox
          value={inputValue}
          onChange={onChange}
          placeholder='답글 추가...'
          required
          reply
        />
        <Column>
          <Button as='div' cancel onClick={cancelToReply} reply>
            취소
          </Button>
          <Button type='submit' reply>
            답글
          </Button>
        </Column>
      </Form>
    </ReplyContainer>
  );
};

export default ReplyCommentContainer;
