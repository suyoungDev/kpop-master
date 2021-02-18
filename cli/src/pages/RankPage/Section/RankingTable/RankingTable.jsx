import React from 'react';
import CleanCard from '../../../../components/Card/CleanCard';
import Center from '../../../../components/Center/Center';
import RankersTable from '../../../OutroPage/Section/RankersTable/RankersTable';

const RankingTable = ({ userRecords }) => {
  return (
    <CleanCard rank>
      <RankersTable userRecords={userRecords} quantityToShow={10} />
    </CleanCard>
  );
};

export default RankingTable;
