import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='spinner-container'>
      <div className='loader'>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Spinner;
