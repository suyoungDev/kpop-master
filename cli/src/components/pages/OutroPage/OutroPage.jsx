import React, { useState, useContext, useEffect } from 'react';
import Button from '../../Button/Button';
import ResultList from '../../ResultList/ResultList';
import { GameResultContext } from '../../GameResultContext/GameResultContext';
import axios from 'axios';

const OutroPage = () => {
  const [gameResult, setGameResult] = useContext(GameResultContext);

  const [name, setName] = useState('');
  const [existingUserName, setExistingUserName] = useState('');
  const [existingUserRecord, setExistingUserRecord] = useState('');

  const [userRankList, setUserRankList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const userName = localStorage.getItem('_userName');

    if (userName) {
      uploadToDB(userName);
      setExistingUserName(userName);

      const previousRecord = localStorage.getItem('_personalRecord');
      setExistingUserRecord(previousRecord);
      const comparedResult = compareRecord(previousRecord, averageResponseTime);

      if (comparedResult === 'better now') {
        uploadNewRecord(averageResponseTime);
      }
    }

    const getRecordsAll = async () => {
      const responseData = await axios.get('/api/user/getRecords');
      const dataList = responseData.data.userRecordList.record;

      // .sort((a, b) => a - b)
      //   .slice(0, 9);
      setUserRankList(dataList);
      setIsLoading(false);
    };

    getRecordsAll();
  }, []);

  const uploadToDB = (user) => {
    const correctAnswers = gameResult
      .filter((game) => game.result === 'correct')
      .map((song) => song.trackName);

    const wrongAnswers = gameResult
      .filter((game) => game.result === 'wrong')
      .map((song) => song.trackName);

    const userData = {
      userName: user,
      record: averageResponseTime,
      correctTrackName: correctAnswers,
      wrongTrackName: wrongAnswers,
      gameResult: gameResult,
    };

    axios.post('/api/user/upload', userData);
  };

  const uploadNewRecord = (currentRecord) => {
    localStorage.setItem('_personalRecord', currentRecord);
  };

  const compareRecord = (previousRecord, currentRecord) => {
    if (previousRecord > currentRecord) {
      return 'better now';
    }
    return 'not better';
  };

  const writeNewRecord = (userName) => {
    localStorage.setItem('_userName', userName);
    localStorage.setItem('_personalRecord', averageResponseTime);
    uploadToDB(userName);
  };

  const update = (e) => {
    setName(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    writeNewRecord(name);
  };

  const totalResponseTime = gameResult
    .map((item) => item.responseTime)
    .reduce((previous, currrent) => previous + currrent, 0);

  const averageResponseTime = (totalResponseTime / 10000).toFixed(2);

  const quantityCorrectAnswers = gameResult.filter(
    (game) => game.result === 'correct'
  ).length;
  const quantityWrongAnswers = gameResult.filter(
    (game) => game.result === 'wrong'
  ).length;

  if (isLoading) {
    return <div>...isLoading</div>;
  }

  return (
    <div>
      <h1>결과</h1>
      {existingUserRecord && (
        <h2>
          {existingUserName}님의 최고 기록: {existingUserRecord}초
        </h2>
      )}
      <div style={{ marginTop: '50px' }}>
        <h2>평균 기록 {averageResponseTime}초</h2>
        <h3>맞춘 곡 {quantityCorrectAnswers}개</h3>

        <ResultList resultList={gameResult} />

        <h3 style={{ marginTop: '20px' }}>틀린 곡 {quantityWrongAnswers}개</h3>

        <ResultList resultList={gameResult} wrong />
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
              minLength='3'
              maxLength='10'
              title='3 to 10 charactor avaiable'
            />
            <button type='submit'>내 기록 남기기</button>
          </form>
        </React.Fragment>
      )}
      <div style={{ marginTop: '50px' }}>
        <div>
          <h3>현재 랭커들 10위권 리스트</h3>
          <p>이름 + 맞춘 갯수 + 평균 속도</p>
          {userRankList.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <div>
            <div>
              <h2>10위권 랭커들의 평균 응답 시간</h2>
            </div>
            <div>
              <p>
                랭커들 평균 속도:
                {(
                  userRankList.reduce((prev, curr) => prev + curr) /
                  userRankList.length
                ).toFixed(2)}
              </p>
              <p></p>
            </div>
          </div>
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
