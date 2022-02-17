import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { breakpoints } from './media';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    font-size: 62.5%; // 10px이 아닌 62.5%로 설정한 이유. 웹 접근성 취지에 어긋남.
  }
  * {
    box-sizing: border-box;
  }
  body{
    background-color: #ccc;
    overflow-x: hidden;
    ${breakpoints.small} {
      height: 100%;
      overflow-y: hidden;
      position: fixed;
    }
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
