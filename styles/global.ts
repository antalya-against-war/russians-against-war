import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #424242;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }
`;