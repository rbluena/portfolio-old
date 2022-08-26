import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 body {
     background: #f5f5f5;
     font-size: 14px;
     font-family: sans-serif;
     color: #333;
 }

 a {
    text-decoration: none;
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
