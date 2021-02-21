import React, { useState } from 'react';
import axios from 'axios';
import LinkButton from '../../../../components/LinkButton/LinkButton';
import { BsSearch } from 'react-icons/bs';
import Spinner from '../../../OutroPage/Section/Spinner/Spinner';

const ChooseOptions = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [inputArtist, setInputArtist] = useState('');
  const [themeToPlay, setThemeToPlay] = useState({
    levelToPlay: 0,
    typeToPlay: '',
    value: '',
  });

  const changeArtist = (event) => {
    setInputArtist(event.target.value);
  };

  const getByArtist = (event) => {
    event.preventDefault();
    const getList = async () => {
      setIsLoading(true);
      const limit = themeToPlay.levelToPlay;
      const variable = { artist: inputArtist, limit: limit };
      const response = await axios.post('/api/chart/getBySinger', variable);
      const trackList = response.data.shuffled;
      setIsLoading(false);
      console.log(trackList);
      if (!trackList.length) {
        alert('찾는 가수가 없습니다. 다시 입력해주세요.');
      }
    };
    getList();
    setIsSelected(true);
  };

  const getByYear = (year) => {
    const getList = async () => {
      setIsLoading(true);
      const limit = themeToPlay.levelToPlay;
      const variable = { year: year, limit: limit };
      const response = await axios.post('/api/chart/getByYear', variable);
      const trackList = response.data.shuffled;
      console.log(trackList);
      setIsLoading(false);
    };
    getList();
    setIsSelected(true);
  };

  const getByThisWeek = () => {
    const getList = async () => {
      setIsLoading(true);
      const limit = themeToPlay.levelToPlay;
      const variable = { limit: limit };
      const response = await axios.post('/api/chart/getByWeek', variable);
      const trackList = response.data.shuffled;
      console.log(trackList);
      setIsLoading(false);
    };
    getList();
    setIsSelected(true);
  };

  const getLevel = (e) => {
    setThemeToPlay({ ...themeToPlay, levelToPlay: e.target.value });
  };

  const getType = (e) => {
    setThemeToPlay({ ...themeToPlay, typeToPlay: e.target.value });
    if (e.target.value === 'this-week') getByThisWeek();
  };

  const getYear = (e) => {
    setThemeToPlay({ ...themeToPlay, value: e.target.value });
    getByYear(e.target.value);
  };

  const yearList = [
    { name: '90년대', value: 1990 },
    { name: '00년대', value: 2000 },
    { name: '10년대', value: 2010 },
    { name: '20년도', value: 2020 },
  ];

  return (
    <div>
      <form onClick={getLevel}>
        <p>난이도 조절</p>
        <input type='radio' value='10' id='easy' name='level' />
        <label htmlFor='easy'>easy</label>
        <input type='radio' value='50' id='normal' name='level' />
        <label htmlFor='normal'>normal</label>
        <input type='radio' value='100' id='hard' name='level' />
        <label htmlFor='hard'>hard</label>
      </form>

      <form onClick={getType}>
        <p>주제 고르기</p>
        <input type='radio' value='artist' id='artist' name='theme' />
        <label htmlFor='artist'>가수명</label>
        <input type='radio' value='year' id='year' name='theme' />
        <label htmlFor='year'>년도별</label>
        <input type='radio' value='this-week' id='this-week' name='theme' />
        <label htmlFor='this-week'>이번주</label>
      </form>

      {themeToPlay.typeToPlay === 'artist' && (
        <form onSubmit={getByArtist}>
          <input
            placeholder='가수 이름으로 플레이하기'
            type='string'
            value={inputArtist}
            onChange={changeArtist}
          />
          <button type='submit'>
            <BsSearch />
          </button>
        </form>
      )}

      {themeToPlay.typeToPlay === 'year' && (
        <form onClick={getYear}>
          {yearList.map((year, index) => (
            <div key={index}>
              <input
                type='radio'
                value={year.value}
                id={year.value}
                name='year'
              />
              <label htmlFor='year'>{year.name}</label>
            </div>
          ))}
        </form>
      )}

      {!isSelected ? (
        <div></div>
      ) : isSelected && isLoading ? (
        <Spinner></Spinner>
      ) : (
        <LinkButton links={'/start'}>start</LinkButton>
      )}
    </div>
  );
};
export default ChooseOptions;
