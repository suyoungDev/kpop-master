import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CleanCard from '../../../../components/Card/CleanCard';
import { COLORS, FONT } from '../../../../constants/theme';
import RankersTable from '../../../OutroPage/Section/RankersTable/RankersTable';
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri';

const MyRecordButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  font-family: ${FONT.korean};
  color: ${COLORS.contentGrayLight};
  letter-spacing: 1px;
  cursor: pointer;

  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0.7rem;

  .icon {
    margin-right: 0.3rem;
  }

  :hover {
    color: ${COLORS.primaryThree};
    transition: all 0.3s ease;
  }
`;

const RankingTable = ({ userRecords }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recordsToShow, setRecordsToShow] = useState(userRecords);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (isOpen === true) {
      setIsLoading(true);
      const filteredResult = userRecords.filter(
        (record) => record._id === user.userData._id
      );

      setRecordsToShow(filteredResult);
      setIsLoading(false);
    } else {
      setRecordsToShow(userRecords);
    }

    // eslint-disable-next-line
  }, [isOpen]);

  const clickHandle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CleanCard rank>
      {!user.userData.isAuth ? null : isOpen ? (
        <MyRecordButton onClick={clickHandle}>
          <RiBookmarkFill className='icon' />
          전체 기록 보기
        </MyRecordButton>
      ) : (
        <MyRecordButton onClick={clickHandle}>
          <RiBookmarkLine className='icon' /> 내 기록만 보기
        </MyRecordButton>
      )}

      {isLoading ? null : (
        <RankersTable userRankList={recordsToShow} quantityToShow={10} />
      )}
    </CleanCard>
  );
};

export default RankingTable;
