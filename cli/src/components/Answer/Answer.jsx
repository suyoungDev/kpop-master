import React from 'react';
import './Answer.css';

const Answer = (props) => {
  return (
    <div className='form'>
      <form className='form'>
        <input type='text' name='answer' autoComplete='off' required />
        <label for='answer' className='label-name'>
          <span className='content-name'>what's the title of this song?</span>
        </label>
      </form>
    </div>
  );
};

export default Answer;
