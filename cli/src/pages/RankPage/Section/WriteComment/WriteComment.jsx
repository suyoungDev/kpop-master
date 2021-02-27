import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import useInput from '../../../../hook/useInput';
import {
  Form,
  Button,
  CommentBox,
  ButtonContainer,
} from './WriteComment.styles';

const Comment = ({ getComments }) => {
  const [inputValue, onChange, resetInput] = useInput('');
  const user = useSelector((state) => state.user);

  const submit = async (e) => {
    e.preventDefault();

    const variables = {
      content: inputValue,
      writer: user.userData._id,
    };

    const response = await axios.post('/api/comment/saveComment', variables);
    if (response.data.success) {
      getComments();
      resetInput();
    }
  };

  return (
    <div>
      Commnet
      <Form onSubmit={submit}>
        <CommentBox
          value={inputValue}
          onChange={onChange}
          placeholder='댓글 추가...'
          required
        />
        <ButtonContainer>
          <Button as='div' cancel onClick={resetInput}>
            취소
          </Button>
          <Button type='submit'>댓글</Button>
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default Comment;
