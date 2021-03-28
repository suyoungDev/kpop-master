import React, { useContext } from 'react';
import axios from 'axios';
import moment from 'moment';

import { CgClose } from 'react-icons/cg';
import { BsDot } from 'react-icons/bs';
import {
  RowBox,
  Writer,
  When,
  Content,
  SeeMore,
  ReplyContainer,
} from '../SingleComment/SingleComment.styles';
import { CommentContext } from '../../../../context/CommentContext';

const ReplyComment = ({ data, currentUser }) => {
  const [getCommentAll] = useContext(CommentContext);

  const deleteComment = async () => {
    const deleteOne = {
      item: data._id,
      user: currentUser,
      writer: data.writer._id,
    };
    await axios.delete('/api/comment/delete', { data: deleteOne });
    getCommentAll();
  };

  return (
    <ReplyContainer column rereply>
      <RowBox>
        <RowBox start='true'>
          <Writer>{data.writer.displayName}</Writer>
          <BsDot size='0.7rem' className='icon' />
          <When>{moment(data.createdAt).locale('ko').fromNow()}</When>
        </RowBox>
        {data.writer._id === currentUser && (
          <SeeMore onClick={deleteComment}>
            <CgClose />
          </SeeMore>
        )}
      </RowBox>
      <RowBox>
        <Content>{data.content}</Content>
      </RowBox>
    </ReplyContainer>
  );
};

export default ReplyComment;
