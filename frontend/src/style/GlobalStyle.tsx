import { Global, css } from '@emotion/react';
import React from 'react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          border: 0;
        }
        html {
          font-family: Arial, Helvetica, sans-serif;
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }
        ul {
          list-style: none;
        }
        button {
          background-color: transparent;
          border: none;
          outline: none;
          padding: 0;
        }
        input {
          outline: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
