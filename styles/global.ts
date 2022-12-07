import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #424242;
  }

  * {
    box-sizing: border-box;
  }
`;