import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  *, h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 16px;
  }

 body {
    font-family: ${({ theme }) => theme.typography.font.primary};
    background: ${({ theme }) => theme.color.light[100]};
    font-weight: ${({ theme }) => theme.typography.weight.normal};
 }

 @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    
    body {
      color: white;
      color: ${({ theme }) => theme.color.light[100]};
      background: ${({ theme }) => theme.color.blue[900]};
    }
  }
`;
