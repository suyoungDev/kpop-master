import { LazyExoticComponent } from 'react';

export interface RouteType {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
}
