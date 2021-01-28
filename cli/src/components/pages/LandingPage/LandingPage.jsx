import React, { useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Button from '../../Button/Button';
import './LandingPage.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const LandingPage = () => {
  useEffect(() => {
    axios.get('/api/hello').then((res) => console.log(res.data));
  }, []);

  return (
    <Wrapper>
      <div>
        <h1>K-pop Master Quiz</h1>
        <Button child={'START'} links={'/start'} />
      </div>
    </Wrapper>
  );
};
export default LandingPage;
