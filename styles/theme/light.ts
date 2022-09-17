import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  title: 'light',

  typography: {
    font: {
      primary: "'Source Sans Pro', Arial, Verdana, sans-serif",
      heading: '',
    },
    size: {
      xl: '4rem',
      lg: '2rem',
      base: '1rem',
      sm: '0.9rem',
      xs: '0.75',
    },
    weight: {
      light: 200,
      normal: 400,
      bold: 700,
      xbold: 900,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.1,
    },
  },

  mediaQuery: {
    xs: 'screen and (max-width: 320px)',
    sm: 'screen and (max-width: 480px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
  },

  color: {
    bgPrimary: '#f5f5f5',
    bgSecondary: '',
    textPrimary: '#000000',
    textSecondary: '',
    textMuted: '#999999',
  },

  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    base: '1rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
};

export default theme;
