import { Global, css } from '@emotion/react';
import React from 'react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          border: none;
        }

        html {
          font-size: 16px;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          min-height: 100%;

          background-color: antiquewhite;
        }

        footer {
          padding: 1rem;
          background-color: white;
        }

        #__next {
          width: 100%;
          height: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }

        ol,
        ul {
          list-style: none;
        }

        li {
          display: flex;
          flex-direction: row;
        }
        button {
          background: inherit;
          border: none;
          box-shadow: none;
          border-radius: 0;
          padding: 0;
          margin: 0;
          overflow: visible;
          cursor: pointer;
          font-family: inherit;
          text-transform: none;
        }

        input {
          width: 100%;
          font-family: inherit;
        }

        address {
          font-style: normal;
        }
      `}
    />
  );
};

export default GlobalStyle;