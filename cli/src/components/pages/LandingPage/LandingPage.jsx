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
      <div style={{ marginTop: '100px' }}>
        <div>
          <h3>주의사항</h3>
        </div>
        <div>현재는 블랙핑크로 테스트 중입니다!</div>
        <div style={{ marginTop: '40px' }}>
          <ul>
            <h4>개발 예정 리스트</h4>
            <li>00년대 케이팝</li>
            <li>10년대 케이팝</li>
            <li>20년대 케이팝</li>
            <li>9080 케이팝</li>
            <li>가수 (검색 지원)</li>
            <li>10곡 이상 선택 가능</li>
            <li>힌트 유무 선택 가능</li>
          </ul>
        </div>
      </div>
      <div></div>
      <Row>
        <Button child={'PRESS TO START'} links={'/start'} />
      </Row>
    </Wrapper>
  );
};
export default LandingPage;
