import { ThemeProvider } from '@emotion/react';
import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import MainHeader from '@F/MainHeader';
import themeStatus from '@atom/theme';
import themeList from '@styles/theme';

type Props = { children: ReactNode; title?: string };

const Layout = ({ children, title }: Props): JSX.Element => {
  const theme = useRecoilValue(themeStatus);

  return (
    <ThemeProvider theme={themeList[theme]}>
      <MainHeader />
      <main>
        {title && <h1>{title}</h1>}
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
