import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';

const AllTheProviders = ({ children }: { children: ReactElement }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
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
