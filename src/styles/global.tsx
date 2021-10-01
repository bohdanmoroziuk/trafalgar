import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Mulish', sans-serif;
    line-height: 1.5;
  }
`;
