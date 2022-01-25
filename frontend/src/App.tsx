import React, { useState, useCallback } from 'react';
import { ThemeProvider } from '@emotion/react';
import Main from '@P/Main';
import { ThemeStyle } from '@TS/styles';
import GlobalStyle from './style/GlobalStyle';
import customTheme from './style/theme';

function App() {
  const [theme, setTheme] = useState<ThemeStyle>('light');

  const themeToggler = useCallback((themeStyle: ThemeStyle) => {
    setTheme(themeStyle);
  }, []);

  return (
    <>
      <ThemeProvider theme={customTheme[theme]}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
