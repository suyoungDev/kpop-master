import React, { useState, useContext, useEffect } from 'react';
import Button from '../../Button/Button';
import ResultList from '../../ResultList/ResultList';
import { GameResultContext } from '../../GameResultContext/GameResultContext';

const OutroPage = () => {
  const [name, setName] = useState('');
  const [gameResult, setGameResult] = useContext(GameResultContext);

  useEffect(() => {
    const userName = localStorage.getItem('_userName');
    if (userName) {
      setGameResult([...gameResult, { userName: name }]);
      writeRecord(userName);
    }
  }, []);

  const writeRecord = (userName) => {
    if (localStorage.getItem('_userName')) {
      if (averageResponseTime < localStorage.getItem('_personalRecord')) {
        localStorage.setItem('_personalRecord', averageResponseTime);
      }
    } else {
      localStorage.setItem('_userName', userName);
      localStorage.setItem('_personalRecord', averageResponseTime);
    }
  };

  const update = (e) => {
    setName(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();

    writeRecord(name);
  };

  const quantityCorrectAnswers = gameResult.filter(
    (game) => game.result === 'correct'
  ).length;
  const quantityWrongAnswers = gameResult.filter(
    (game) => game.result === 'wrong'
  ).length;

  const totalResponseTime = gameResult
    .map((item) => item.responseTime)
    .reduce((prev, curr) => prev + curr, 0);

  const averageResponseTime = (totalResponseTime / 10000).toFixed(2);

  return (
    <div>
      <h1>결과</h1>
      <div style={{ marginTop: '50px' }}>
        <h3>맞춘 곡 {quantityCorrectAnswers}개</h3>

        <ResultList resultList={gameResult} />

        <h3 style={{ marginTop: '20px' }}>틀린 곡 {quantityWrongAnswers}개</h3>

        <ResultList resultList={gameResult} wrong />

        <h4>평균 응답 속도 {averageResponseTime}초</h4>
      </div>
      {!localStorage.getItem('_userName') && (
        <React.Fragment>
          <h2>랭킹에 저장하시겠습니까?</h2>
          <form onSubmit={addName}>
            <input
              placeholder='your name'
              type='text'
              value={name}
              onChange={update}
            />
            <button type='submit'>내 기록 남기기</button>
          </form>
        </React.Fragment>
      )}
      <div style={{ marginTop: '50px' }}>
        <div>
          <h3>현재 랭커들 10위권 리스트</h3>
          <p>이름 + 맞춘 갯수 + 평균 속도</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>내결과 공유하기</h3>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '400px',
          }}
        >
          <li>카톡</li>
          <li>페이스북</li>
          <li>인스타</li>
          <li>트위터</li>
        </ul>
      </div>
      <Button child={'다시하기'} links='/' />
    </div>
  );
};

export default OutroPage;
