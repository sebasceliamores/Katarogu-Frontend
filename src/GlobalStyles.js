import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  box-sizing: border-box;
  margin: 0;
  background-color: #f0f0f0;
  font-family: "Baloo Bhai 2", sans-serif;
  width: 100%;
  height: 100vh;
  color: #565656;

  /* Quita recuadro azul al hacer tap a botones -  version mobile */
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

ul, li, h1, h2, h3, h4, h5, p {
  margin:0;
  padding:0;
}
ul{list-style: none;}
button { border: none; outline: 0;}
`