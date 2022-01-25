import React, { useState, useCallback } from 'react';
import { ThemeProvider } from '@emotion/react';
import { ThemeStyle } from '@TS/styles';
import GlobalStyle from './style/GlobalStyle';
import customTheme from './style/theme';
import CustomRouter from './routes';

function App() {
  const [theme, setTheme] = useState<ThemeStyle>('light');

  const themeToggler = useCallback((themeStyle: ThemeStyle) => {
    setTheme(themeStyle);
  }, []);

  return (
    <ThemeProvider theme={customTheme[theme]}>
      <GlobalStyle />
      <CustomRouter />
    </ThemeProvider>
  );
}

export default App;
