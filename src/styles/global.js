/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Expanded:wght@100;300;400;600;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

/* pseudo-elemento que aplica estilos para partes do documento 
** que foram selecionadas, tipo selecionar um texo 
*/
::selection {
  background-color: #48dbfb60;
}

/* Barra de rolagem do navegador */
::-webkit-scrollbar {
  width: 10px;
  background-color: #46495A;
}

::-webkit-scrollbar-thumb {
  background-color: #e1e5ee;
}

  :root {
    /* 
    #e1e5ee
    #c7ccdb
    #767b91
    #2a324b
    #fff
    */
    /* 
      #383A47
      #3D3F4D
    */

    /* Layout */
    --background-layout-main: #383A47;
    --background-layout-mobile: #383a47f6;

    /* Profile */
    --background-profile-primary: #46495A;
    --color-profile-primary: #e1e5ee;
    --color-profile-hover: #767b91;
    
    /* line PostItem */
    --color-line-postitem: #4E5166;

    /* Menu Links */
    --color-link-primary: #e1e5ee;
    --color-link-hover: #ff7f50;
    /* --color-link-hover: #767b91; */
    /* --color-link-hover: #83A7F7; */

    /* Post color */
    --post-color: #fff;
    --hightlight-quote: #ff7f50;
    --color-line-borders: #4E5166;

    /* Social Links BG */
    --background-social-links: #343643;

    --font-title-main: 'Comfortaa', cursive;
    --font-title-position: 'Montserrat', sans-serif;

  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
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
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  /* body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --hightlight: #1fa1f2;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #fff;
    --black: #222;
  }
  body.light {
    --borders: #dedede;
    --texts: #555555;
    --postColor: #111;
    --hightlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  } */
`;

export default GlobalStyles;
