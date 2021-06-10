import React, { useContext } from 'react';
import { CgClose } from 'react-icons/cg';
import { AuthContext } from '../../../../context/AuthContext';
import { SeeMore } from './SingleComment.styles';

const DeleteComment = ({ userId, writerId, deleteComment }) => {
  const [isLoggedIn] = useContext(AuthContext);

  if (!isLoggedIn) return null;

  return (
    <>
      {userId === writerId && (
        <SeeMore onClick={deleteComment}>
          <CgClose />
        </SeeMore>
      )}
    </>
  );
};

export default DeleteComment;
