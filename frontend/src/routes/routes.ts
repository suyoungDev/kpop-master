import { lazy } from 'react';
import { RouteType } from '@TS/routes';

const MainPage = lazy(() => import('@P/MainPage'));
const PlayListPage = lazy(() => import('@P/PlayListPage'));
const GamePage = lazy(() => import('@P/GamePage'));

const routes: RouteType[] = [
  { path: '/', element: MainPage },
  { path: '/theme', element: PlayListPage },
  { path: '/:room-id', element: GamePage },
];

export default routes;
