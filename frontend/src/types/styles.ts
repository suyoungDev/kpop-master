export type ThemeStyle = 'light' | 'dark' | 'oldSchool';

export type MediaQuery =
  | 'mobile'
  | 'tablet'
  | 'laptop'
  | 'tablet'
  | 'desktop'
  | 'desktopM'
  | 'desktopL';

export type Colors = 'success' | 'danger' | 'info' | 'warning';
export type Action = 'default' | 'hover' | 'act' | 'disabled';
export type Dim = 'default' | 'light' | 'lighter' | 'dark' | 'darker';
// NOTE: 필요없을것같은데 일단 작성
// export type NodeElement = 'background' | 'border' | 'text';

export interface Theme {
  colors: { [k in Colors]: string };
  ink: { [k in Dim]: string };
  background: { [k in Extract<Dim, 'default' | 'light'> | 'modal']: string };
  primary: { [k in Dim]: string };
  secondary: { [k in Extract<Dim, 'default' | 'light' | 'dark'>]: string };
}
