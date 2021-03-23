import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CleanCard from '../../../../components/Card/CleanCard';
import { COLORS, FONT } from '../../../../constants/theme';
import RankersTable from '../../../OutroPage/Section/RankersTable/RankersTable';
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri';
import Spinner from '../../../../components/Spinner/Spinner';

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

const NoDataSpan = styled.span`
  color: ${COLORS.contentGrayLight};
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const RankingTable = ({ userRecords }) => {
  const [showMyRecord, setShowMyRecord] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nullData, setNullData] = useState(false);
  const [recordsToShow, setRecordsToShow] = useState(userRecords);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (showMyRecord) {
      setIsLoading(true);

      const filteredResult = userRecords.filter(
        (record) => record._id === user.userData._id
      );

      if (filteredResult.length) {
        setRecordsToShow(filteredResult);
        setIsLoading(false);
      } else {
        setNullData(true);
        setIsLoading(false);
      }
    }

    // eslint-disable-next-line
  }, [showMyRecord]);

  const clickHandle = () => {
    setShowMyRecord(!showMyRecord);
  };

  return (
    <CleanCard rank>
      {showMyRecord ? (
        <MyRecordButton onClick={clickHandle}>
          <RiBookmarkFill className='icon' />
          전체 기록 보기
        </MyRecordButton>
      ) : (
        <MyRecordButton onClick={clickHandle}>
          <RiBookmarkLine className='icon' /> 내 기록만 보기
        </MyRecordButton>
      )}

      {isLoading ? (
        <Spinner />
      ) : !showMyRecord ? (
        <RankersTable userRankList={userRecords} quantityToShow={10} />
      ) : nullData ? (
        <NoDataSpan>데이터가 없습니다. 게임을 시작해주세요.</NoDataSpan>
      ) : (
        <RankersTable userRankList={recordsToShow} quantityToShow={10} />
      )}
    </CleanCard>
  );
};

export default RankingTable;
