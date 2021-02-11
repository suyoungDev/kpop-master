import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Log = styled.li`
  width: 15rem;
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.7);
  font-family: Raleway;
  font-size: 14px;
  text-align: left;
  list-style: none;
`;

const LogList = ({ giveAnswers }) => {
  return (
    <Wrapper>
      <ul>
        {giveAnswers
          .filter((answer, idx) => idx < 5)
          .map((answer, idx) => (
            <Log key={idx}>{answer}</Log>
          ))}
      </ul>
    </Wrapper>
  );
};

export default LogList;
