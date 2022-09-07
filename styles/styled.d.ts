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
      bgPrimary: string;
      bgSecondary: string;
      textPrimary: string;
      textSecondary: string;
      textMuted?: string;
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
