import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

const Router = (): JSX.Element => {
  return (
    <Routes>
      {routes.map((route) => (
        <Suspense fallback={<div>로딩 중</div>}>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        </Suspense>
      ))}
    </Routes>
  );
};

export default Router;
