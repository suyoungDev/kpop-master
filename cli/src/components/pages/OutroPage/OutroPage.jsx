import React, { useState, useContext } from 'react';
import Button from '../../Button/Button';
import ResultList from '../../ResultList/ResultList';
import { GameResultContext } from '../../GameResultContext/GameResultContext';

const OutroPage = () => {
  const [name, setName] = useState('');
  const [gameResult, setGameResult] = useContext(GameResultContext);

  const update = (e) => {
    setName(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();

    localStorage.setItem('_userName', name);
    setName('');

    setGameResult([...gameResult, { userName: name }]);
  };

  const quantityCorrectAnswers = gameResult.filter(
    (game) => game.result === true
  ).length;
  const quantityWrongAnswers = gameResult.filter(
    (game) => game.result === false
  ).length;

  return (
    <div>
      <h1>결과</h1>
      <div style={{ marginTop: '50px' }}>
        <h3>맞춘 노래 {quantityCorrectAnswers}개</h3>

        <ResultList resultList={gameResult} />

        <h3 style={{ marginTop: '20px' }}>
          못맞춘 노래 {quantityWrongAnswers}개
        </h3>

        <ResultList resultList={gameResult} wrong />

        <h4>평균 응답 속도 00초</h4>
      </div>
      <div style={{ marginTop: '50px' }}>
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

        <div>
          <h3>현재 랭커들 10위권 리스트</h3>
          <p>이름 + 맞춘 갯수 + 평균 속도</p>
        </div>
      </div>
      <h3>내결과 공유하기</h3>
      <ul>
        <li>카톡</li>
        <li>페이스북</li>
        <li>인스타</li>
        <li>트위터</li>
      </ul>
      <Button child={'다시하기'} links='/' />
    </div>
  );
};

export default OutroPage;
