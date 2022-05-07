import { ThemeProvider } from '@emotion/react';
import { RenderOptions, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';
import themeList from '@styles/theme';

const AllTheProviders = ({ children }: { children: ReactElement }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={themeList['light']}>{children}</ThemeProvider>
    </RecoilRoot>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

function setup(ui: ReactElement) {
  return {
    user: userEvent.setup(),
    ...customRender(ui),
  };
}
export * from '@testing-library/react';
export { setup as render };
