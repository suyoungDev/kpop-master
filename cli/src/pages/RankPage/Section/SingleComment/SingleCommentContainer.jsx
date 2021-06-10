import React, { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { CommentContext } from '../../../../context/CommentContext';
import useInput from '../../../../hook/useInput';
import useToggle from '../../../../hook/useToggle';

import { CommentWrapper } from './SingleComment.styles';
import ReplyCommentContainer from './ReplyCommentContainer';
import RepliedCommentListContainer from './RepliedCommentListContainer';
import Comment from './Comment';

const SingleCommentContainer = ({ content, writer, createdAt, toWhat }) => {
  const [toggleReplyList, isOpenReplyList] = useToggle();
  const [toggleToWrite, isOpenWrite] = useToggle();
  const [inputValue, onChange, resetInput] = useInput('');

  const [quantityOfComment, setQuantityOfComment] = useState(0);

  const { userData } = useSelector((state) => state.user);
  const [getCommentAll, commnetList] = useContext(CommentContext);

  useEffect(() => {
    const number = commnetList.filter((item) => item.toWhom === toWhat).length;
    setQuantityOfComment(number);
  }, [commnetList, toWhat]);

  const submit = async (e) => {
    e.preventDefault();

    const variables = {
      writer: userData._id,
      content: inputValue,
      toWhom: toWhat,
    };

    await axios.post('/api/comment/saveComment', variables);
    getCommentAll();

    resetInput();
    toggleReplyList();
  };

  const cancelToReply = () => {
    resetInput();
    toggleReplyList();
  };

  const deleteComment = async () => {
    const deleteOne = {
      item: toWhat,
      user: userData._id,
      writer: writer._id,
    };
    await axios.delete('/api/comment/delete', { data: deleteOne });

    // 다시 데이터가져 올 필요없이..
    // 그... 낙관적인 업데이트 ? 그걸로 수정했으면.....
    getCommentAll();
  };

  return (
    <CommentWrapper>
      <Comment
        toWhat={toWhat}
        writer={writer}
        userId={userData._id}
        content={content}
        deleteComment={deleteComment}
        createdAt={createdAt}
        quantityOfComment={quantityOfComment}
        toggleReplyList={toggleReplyList}
        toggleToWrite={toggleToWrite}
        isOpenWrite={isOpenWrite}
      />
      <RepliedCommentListContainer
        parrentId={toWhat}
        currentUser={userData._id}
        isOpenWrite={isOpenWrite}
      />

      <ReplyCommentContainer
        isOpen={isOpenReplyList}
        isAuth={userData.isAuth}
        submit={submit}
        inputValue={inputValue}
        onChange={onChange}
        cancelToReply={cancelToReply}
      />
    </CommentWrapper>
  );
};

export default SingleCommentContainer;
