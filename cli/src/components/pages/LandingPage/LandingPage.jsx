import React from 'react';

import styled from 'styled-components';
import Button from '../../Button/Button';
import './LandingPage.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <h1>K-pop Master Quiz</h1>
      <Row>
        <Button child={'PRESS TO START'} links={'/start'} />
      </Row>
    </Wrapper>
  );
};
export default LandingPage;
