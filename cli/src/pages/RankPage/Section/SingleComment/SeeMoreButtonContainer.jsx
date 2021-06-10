import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import HideOrMoreButton from './HideOrMoreButton';
import { RowBox, SeeMore } from './SingleComment.styles';

const SeeMoreButtonContainer = ({
  toggleReplyList,
  isOpenWrite,
  handleClick,
  quantityOfComment,
}) => {
  const [isLoggedIn] = useContext(AuthContext);

  return (
    <RowBox>
      {isLoggedIn && <SeeMore onClick={toggleReplyList}>답글쓰기</SeeMore>}

      <HideOrMoreButton
        handleClick={handleClick}
        isOpenWrite={isOpenWrite}
        quantityOfComment={quantityOfComment}
      />
    </RowBox>
  );
};

export default SeeMoreButtonContainer;
