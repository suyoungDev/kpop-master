import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CleanCard from '../../../../components/Card/CleanCard';
import RankersTable from '../../../OutroPage/Section/RankersTable/RankersTable';
import Spinner from '../../../../components/Spinner/Spinner';
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri';
import { NoDataSpan, MyRecordButton } from './RankingTable.styles';

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
