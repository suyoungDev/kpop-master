import React from 'react';
import { SeeMore } from './SingleComment.styles';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

const HideOrMoreButton = ({ handleClick, isOpenWrite, quantityOfComment }) => {
  if (!quantityOfComment) return null;

  return (
    <SeeMore onClick={handleClick}>
      {isOpenWrite ? (
        <>
          답글 숨기기
          <BiChevronUp />
        </>
      ) : (
        <>
          답글 {quantityOfComment}개 더 보기
          <BiChevronDown />
        </>
      )}
    </SeeMore>
  );
};

export default HideOrMoreButton;
