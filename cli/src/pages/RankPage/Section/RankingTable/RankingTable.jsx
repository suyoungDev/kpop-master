import React from 'react';
import CleanCard from '../../../../components/Card/CleanCard';
import RankersTable from '../../../OutroPage/Section/RankersTable/RankersTable';

const RankingTable = ({ userRecords }) => {
  return (
    <CleanCard rank>
      <RankersTable userRankList={userRecords} quantityToShow={10} />
    </CleanCard>
  );
};

export default RankingTable;
