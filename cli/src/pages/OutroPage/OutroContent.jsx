import React from 'react';
import styled from 'styled-components';
import { SIZES } from '../../constants/theme';
import ShareMyRecord from './Section/ShareMyRecord/ShareMyRecord';
import PreviousRecord from './Section/PreviousRecord/PreviousRecord';
import RankersRecord from './Section/RankersRecord/RankersRecord';
import CurrentRecord from './Section/CurrentRecord/CurrentRecord';
import LoadingContainer from '../../components/LoadingContainer';

const ContentWrapper = styled.div`
  max-width: ${SIZES.tabletWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
`;

const OutroContent = ({ isLoading, userRankList, averageResponseTime }) => {
  return (
    <LoadingContainer isLoading={isLoading}>
      <ContentWrapper>
        <PreviousRecord userRankList={userRankList} />
        <CurrentRecord averageResponseTime={averageResponseTime} />
        <RankersRecord
          userRankList={userRankList}
          myRecord={averageResponseTime}
        />
        <ShareMyRecord />
      </ContentWrapper>
    </LoadingContainer>
  );
};

export default OutroContent;
