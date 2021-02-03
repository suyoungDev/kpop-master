import React from 'react';

import styled from 'styled-components';
import Button from '../../Button/Button';

import './LandingPage.css';

const Wrapper = styled.div``;

const LandingPage = () => {
  return (
    <div className='wrapper'>
      <div className='white'>
        <div className='title'>
          <h1>
            K-pop
            <br /> Master <br />
            Quiz
          </h1>
        </div>
        <div className='alert'>
          <div className='alert-text'>
            <div className='mark'>알림</div>
            <p>현재는 블랙핑크로 테스트 중입니다!</p>
          </div>
          <div className='list'>
            <div className='blue'>개발 예정 리스트</div>
            <ul>
              <li>00년대 가요</li>
              <li>10년대 가요</li>
              <li>20년대 가요</li>
              <li>9080 가요</li>
              <li>가수 (검색 지원)</li>
              <li>힌트 유무 선택 가능</li>
            </ul>
          </div>
          <div className='button-container'>
            <Button child={'START'} links={'/start'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
