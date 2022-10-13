import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  *[hidden] {
      display: none;
  }

  body {
    line-height: 1;
  }
  
  menu, ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  button, input {
    padding: 0;
    border: 0;
  }
 
  button,
  input[type="text"],
  input[type="tel"],
  input[type="number"],
  input[type="password"],
  input[type="email"] {
    appearance: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }

  strong {
    font-weight: 700;
  }

  #root {
    position:relative;
    width: 100%;
    height:100%;
    margin-left: auto;
    margin-right: auto;
    min-width: 280px;
    max-width: 640px;
  }

  .app {
    width: 100%;
    height: 100%;
  }

  #toast {
    position: fixed;
    z-index: 9999;
  }
`;

export default GlobalStyles;
