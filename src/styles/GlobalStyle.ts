import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { breakpoints } from './media';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    font-size: 10px;
  }
  * {
    box-sizing: border-box;
  }
  body{
    background-color: #333;
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
  ${breakpoints.small} {
    html {
      font-size: 15px;
    }
  }
  ${breakpoints.medium} {
    html {
      font-size: 20px;
    }
  }
  ${breakpoints.large} {
    html {
      font-size: 30px;
    }
  }
`;

export default GlobalStyle;
