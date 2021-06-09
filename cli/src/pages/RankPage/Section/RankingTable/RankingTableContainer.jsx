import React from 'react';
import RankingTable from './RankingTable';
import LoadingContainer from '../../../../components/LoadingContainer';

const RankingTableContainer = ({ isLoading, userRankList }) => {
  return (
    <LoadingContainer isLoading={isLoading}>
      {userRankList && <RankingTable userRecords={userRankList} />}
    </LoadingContainer>
  );
};

export default RankingTableContainer;
