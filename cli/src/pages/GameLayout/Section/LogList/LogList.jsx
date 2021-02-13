import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 6rem;
  margin-bottom: 1.3rem;
`;

const Log = styled.li`
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.7);
  font-family: 'nanum gothic';
  font-size: 14px;
  text-align: left;
  list-style: none;
`;

const LogList = ({ giveAnswers }) => {
  return (
    <Wrapper>
      {giveAnswers
        .filter((answer, idx) => idx < 5)
        .map((answer, idx) => (
          <Log key={idx}>{answer}</Log>
        ))}
    </Wrapper>
  );
};

export default LogList;
