import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  html {
    font-size: 16px;
  }

 body {
    font-family: ${({ theme }) => theme.typography.font.primary};
    background: ${({ theme }) => theme.color.light[100]};
    font-weight: ${({ theme }) => theme.typography.weight.normal};
    font-size: 16px;
 }

 @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    
    body {
      color: white;
      background: black;
    }
  }
`;
