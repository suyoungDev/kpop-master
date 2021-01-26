import React, { useState, useEffect } from 'react';

import AlbumArt from '../../AlbumArt/AlbumArt';
import { blackpinkData } from '../../../data/blackpink';

import styled from 'styled-components';
import './Start.css';

const QuizLeft = styled.p`
  font-size: 50px;
  font-weight: bold;
  color: #7a979c;
  position: fixed;
  left: 10px;
  top: 10px;
`;

const Start = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [shuffled, setShuffled] = useState(blackpinkData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [inputvalue, setinputvalue] = useState('');
  const [givenAnswer, setGivenAnswer] = useState('');

  useEffect(() => {
    setIsLoading(true);

    let result = blackpinkData.sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffled(result);

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>..loading...</div>;
  }

  const timePassed = () => {
    // 10초 지나서 다음 문제로 강제로 넘어가기
    // 틀렸다고 DB에 기록
    // 이건 setInterval에 기록해넣기?!?!?
  };

  const isCorrect = (answer) => {
    // onSubmit function! form에다 작성할것
    // onSbumit={()=>isCorrect(answer)} 이런식
    let givenAnswer = answer.toLowerCase().replace(/\W/g, '');
    let correct = shuffled[currentQuestion].trackName
      .toLowerCase()
      .replace(/\W/g, '');

    if (givenAnswer !== correct) {
      alert('틀림');
      // 사실 wrong 사운드로 하고싶지만 ~_~ + 화면이펙트
    } else {
      setCurrentQuestion(currentQuestion++);
      if (currentQuestion < shuffled.length) {
        setShowScore(true);
        // result page 만들어야겠구먼..
      }
      // + re-render Question Compoment;
    }
  };

  const update = (event) => {
    setinputvalue(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    setGivenAnswer(inputvalue);
    console.log(inputvalue);
    console.log(givenAnswer);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <p>ended of games!</p>
          <p>you score 10 / 10</p>
        </div>
      ) : (
        <React.Fragment>
          <QuizLeft>
            {currentQuestion + 1} / {shuffled.length}
          </QuizLeft>
          <AlbumArt />
          {shuffled.map((song, idx) => (
            <label key={song.id}>
              <p>{song.trackName}</p>
            </label>
          ))}
                
          <form onSubmit={submit}>
                    
            <input
              placeholder='guess what?'
              type='text'
              value={inputvalue}
              onChange={update}
            />
                  
          </form>
          <p>{givenAnswer}</p>
        </React.Fragment>
      )}
    </div>
  );
};

export default Start;
