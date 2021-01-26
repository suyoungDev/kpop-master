import React, { useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Button from '../Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingPage = () => {
  useEffect(() => {
    axios.get('/api/hello').then((res) => console.log(res.data));
  }, []);

  return (
    <Wrapper>
      K-pop Master Quiz
      <Button child={'시작하기'} links={'/start'} />
    </Wrapper>
  );
};
export default LandingPage;
