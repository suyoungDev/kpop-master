import React from 'react';

import Description from './Section/Description/Description';
import LinkButton from '../../components/LinkButton/LinkButton';
import Center from '../../components/Center/Center';
import PageWrapper from './Section/PageWrapper/PageWrapper';
import OutroContent from './OutroContent';
import useOutroPage from '../../hook/useOutroPage';

const OutroPage = () => {
  const { isLoading, userRankList, isLoggedIn } = useOutroPage();

  return (
    <Center>
      <PageWrapper>
        <Description averageResponseTime={averageResponseTime} />
        <LinkButton links='/'>play again</LinkButton>
        <OutroContent
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
          userRankList={userRankList}
        />
      </PageWrapper>
    </Center>
  );
};

export default OutroPage;
