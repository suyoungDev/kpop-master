import { lazy } from 'react';
import { RouteType } from '@TS/routes';

const MainPage = lazy(() => import('@P/MainPage'));
const PlayListPage = lazy(() => import('@P/PlayListPage'));
const GamePage = lazy(() => import('@P/GamePage'));

const routes: RouteType[] = [
  { path: '/', element: MainPage },
  { path: '/customPlayList', element: PlayListPage },
  { path: '/game', element: GamePage },
];

export default routes;
