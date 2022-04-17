import { css, Global, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        background-color: white;
        min-height: 100%;
      }
    `}
  />
);
