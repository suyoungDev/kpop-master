import React, { useState, useEffect, useRef } from 'react';

import AlbumArt from '../../AlbumArt/AlbumArt';
import Logging from '../../Logging/Logging';
import QuizLeft from '../../QuizLeft/QuizLeft';
import UserTimer from '../../UserTimer/UserTimer';
import Player from '../../Player/Player';

import './Start.css';

import { blackpinkData } from '../../../data/blackpink';

const Start = () => {
  const [shuffled, setShuffled] = useState(blackpinkData);
  const [currentRound, setCurrentRound] = useState(0);
  const [inputvalue, setinputvalue] = useState('');
  const [givenAnswersList, setGivenAnswersList] = useState([]);
  const [url, setUrl] = useState('');

  const focusedInput = useRef(null);

  useEffect(() => {
    let result = blackpinkData.sort(() => Math.random() - 0.5).slice(0, 10);
    setShuffled(result);
    setUrl(result[currentRound].url);

    focusedInput.current.focus();

    currentRound < 9 &&
      setTimeout(() => {
        setCurrentRound(currentRound + 1);
      }, 10000);
  }, [currentRound]);

  const isCorrect = (answer) => {
    // onSubmit function! form에다 작성할것
    // onSbumit={()=>isCorrect(answer)} 이런식
    let givenAnswer = answer.toLowerCase().replace(/\W/g, '');
    let correct = shuffled[currentRound].trackName
      .toLowerCase()
      .replace(/\W/g, '');

    if (givenAnswer !== correct) {
      alert('틀림');
      // 사실 wrong 사운드로 하고싶지만 ~_~ + 화면이펙트
    } else {
      setCurrentRound(currentRound + 1);
      if (currentRound < shuffled.length) {
        // result page 만들어야겠구먼..
      }
      // + re-render Question Compoment;
    }
  };

  const onChange = (event) => {
    setinputvalue(event.target.value);
  };

  const answerSubmit = (event) => {
    event.preventDefault();
    setGivenAnswersList([inputvalue, ...givenAnswersList]);
    setinputvalue('');
  };

  return (
    <body>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-around',
        }}
      >
        <QuizLeft passed={currentRound + 1} left={shuffled.length} />

        {currentRound <= 9 && (
          <label>
            <p>{shuffled[currentRound].trackName}</p>
          </label>
        )}
        <Player url={url} />
        <UserTimer />
        <form onSubmit={answerSubmit}>
          <input
            placeholder='guess what?'
            type='text'
            value={inputvalue}
            onChange={onChange}
            ref={focusedInput}
          />
          {givenAnswersList
            .filter((item, idx) => idx < 3)
            .map((answer, idx) => (
              <Logging key={idx} answer={answer} />
            ))}
        </form>
      </div>
    </body>
  );
};

export default Start;
