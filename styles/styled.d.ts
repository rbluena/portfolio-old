import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    typography: {
      font: {
        primary: string;
        heading: string;
      };
      size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        xxl: string;
      };
      weight: {
        light: number;
        normal: number;
        bold: number;
        xbold: number;
      };
      lineHeights: {
        body: number;
        heading: number;
      };
    };

    mediaQuery: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };

    color: {
      blue: {
        900: string;
      };
      green: {
        300: string;
      };
      pink: {
        700: string;
      };
      light: {
        100: string;
        200: string;
        800: string;
      };
      dark: {
        900: string;
      };
    };

    space: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
