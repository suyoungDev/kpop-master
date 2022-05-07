import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: { [k in Colors]: string };
    ink: { [k in Dim]: string } & { buttonText: string };
    background: { [k in Extract<Dim, 'default' | 'light'> | 'modal']: string };
    primary: { [k in Dim]: string };
    secondary: { [k in Dim]: string };
  }
}
