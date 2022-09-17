import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

 body {
    font-family: ${({ theme }) => theme.typography.font.primary};
    background: #f5f5f5;
    font-weight: ${({ theme }) => theme.typography.weight.normal};
    font-size: 14px;
    color: #333;
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
