'use client'

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html {
     font-family: 'Poppins', sans-serif;
     font-size: 62.5%;
     font-weight: 300;
     box-sizing: border-box;
   }

   *,
   *::before,
   *::after {
     box-sizing: inherit;
   }

   body{
     margin: 0;
     padding: 0;
     background-color: #12191F;
     color: #fff;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     font-feature-settings: 'liga' 1;
   }
`

export default GlobalStyle;