import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

const Router = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩 중</div>}>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.element />} key={route.path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Router;
