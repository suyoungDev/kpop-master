import React, { useState } from 'react';
import axios from 'axios';
import LinkButton from '../../../../components/LinkButton/LinkButton';

const ChooseOptions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [inputArtist, setInputArtist] = useState('');
  const [inputYear, setInputYear] = useState();
  const [quantityToGet, setQuantityToGet] = useState(10);

  const changeArtist = (event) => {
    setInputArtist(event.target.value);
  };

  const changeYear = (event) => {
    setInputYear(event.target.value);
  };

  const getByArtist = (event) => {
    event.preventDefault();
    const getList = async () => {
      setIsLoading(true);
      const variable = { artist: inputArtist, limit: quantityToGet };
      const response = await axios.post('/api/chart/getBySinger', variable);
      const trackList = response.data.result;
      setIsLoading(false);
      console.log(trackList);
      if (!trackList.length) {
        alert('찾는 가수가 없습니다. 다시 입력해주세요.');
      }
    };
    getList();
  };

  const getByYear = (event) => {
    event.preventDefault();
    const getList = async () => {
      setIsLoading(true);
      const variable = { year: inputYear, limit: quantityToGet };
      const response = await axios.post('/api/chart/getByYear', variable);
      const trackList = response.data.result;
      setIsLoading(false);
      console.log(trackList);
    };
    getList();
  };

  const getByThisWeek = (event) => {
    event.preventDefault();
    const getList = async () => {
      setIsLoading(true);
      const variable = { limit: quantityToGet };
      const response = await axios.post('/api/chart/getByWeek', variable);
      const trackList = response.data.result;
      setIsLoading(false);
      console.log(trackList);
    };
    getList();
  };

  const getLevel = (e) => {
    setQuantityToGet(e.target.value);
  };

  return (
    <div>
      <form onClick={getLevel}>
        <label>난이도 조절</label>
        <input type='radio' value='10' id='easy' name='level' />
        <label for='easy'>easy</label>
        <input type='radio' value='50' id='normal' name='level' />
        <label for='normal'>normal</label>
        <input type='radio' value='100' id='hard' name='level' />
        <label for='hard'>hard</label>
      </form>

      <form onSubmit={getByArtist}>
        <input
          placeholder='가수 이름'
          type='string'
          value={inputArtist}
          onChange={changeArtist}
        />
        <button type='submit'>가수이름으로 목록 불러오기</button>
      </form>
      <form onSubmit={getByYear}>
        <input
          placeholder='년도'
          type='number'
          value={inputYear}
          onChange={changeYear}
          min='1990'
          max='2020'
        />
        <button type='submit'>년도별 목록</button>
      </form>

      <button onClick={getByThisWeek}>이번주 목록 가져오기</button>

      {isLoading ? (
        <div></div>
      ) : (
        <LinkButton links={'/start'}>start</LinkButton>
      )}
    </div>
  );
};
export default ChooseOptions;
