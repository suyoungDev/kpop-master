import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

import { CommentContext } from '../../../../context/CommentContext';

import useInput from '../../../../hook/useInput';
import { Form, Button, CommentBox } from '../WriteComment/WriteComment.styles';
import {
  ColumnWrapper,
  Writer,
  Content,
  RowBox,
  When,
  RowContainer,
  SeeMore,
  ReplyContainer,
  CommentWrapper,
  Column,
} from './SingleComment.styles';
import ReplyCommentList from '../ReplyCommentList/ReplyCommentList';
import Heart from '../Heart/Heart';

const SingleComment = ({ content, writer, createdAt, toWhat }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOkayToShowMoreReplies, setIsOkayToShowMoreReplies] = useState(false);
  const [inputValue, onChange, resetInput] = useInput('');
  const user = useSelector((state) => state.user);
  const [getCommentAll, commnetList] = useContext(CommentContext);

  const submit = async (e) => {
    e.preventDefault();

    const variables = {
      writer: user.userData._id,
      content: inputValue,
      toWhom: toWhat,
    };

    await axios.post('/api/comment/saveComment', variables);
    getCommentAll();

    resetInput();
    setIsOpen(!isOpen);
  };

  const cancelToReply = () => {
    resetInput();
    setIsOpen(!isOpen);
  };

  const accordian = () => {
    setIsOpen(!isOpen);
  };

  const deleteComment = async () => {
    const deleteOne = {
      item: toWhat,
      user: user.userData._id,
      writer: writer._id,
    };
    await axios.post('/api/comment/delete', deleteOne);
    getCommentAll();
  };

  const showMoreReplies = () => {
    setIsOkayToShowMoreReplies(!isOkayToShowMoreReplies);
  };

  return (
    <CommentWrapper>
      <RowContainer>
        <Heart toWhat={toWhat} />
        <ColumnWrapper>
          <RowBox>
            <RowBox start='true'>
              <Writer>{writer.displayName}</Writer>
              <BsDot size='0.7rem' className='icon' />
              <When>{moment(createdAt).locale('ko').fromNow()}</When>
            </RowBox>
            {user.userData._id === writer._id && (
              <SeeMore onClick={deleteComment}>
                <CgClose />
              </SeeMore>
            )}
          </RowBox>
          <RowBox>
            <Content>{content}</Content>
          </RowBox>
          <RowBox>
            {user.userData.isAuth && (
              <SeeMore onClick={accordian}>답글쓰기</SeeMore>
            )}
            {commnetList.filter((item) => item.toWhom === toWhat).length ? (
              isOkayToShowMoreReplies ? (
                <SeeMore onClick={showMoreReplies}>
                  답글 숨기기
                  <BiChevronUp className='icon' />
                </SeeMore>
              ) : (
                <SeeMore onClick={showMoreReplies}>
                  답글{' '}
                  {commnetList.filter((item) => item.toWhom === toWhat).length}
                  개 더 보기
                  <BiChevronDown className='icon' />
                </SeeMore>
              )
            ) : null}
          </RowBox>
        </ColumnWrapper>
      </RowContainer>

      {isOkayToShowMoreReplies && (
        <ReplyCommentList parrentId={toWhat} currentUser={user.userData._id} />
      )}

      {isOpen && user.userData.isAuth && (
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
      )}
    </CommentWrapper>
  );
};

export default SingleComment;
