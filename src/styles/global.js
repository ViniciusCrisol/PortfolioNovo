import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Baloo+Paaji+2&display=swap');
*{
  margin:0 ;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

body {
background: #f1f1f1;
-webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: #2e3159;
  font:14px 'Baloo Paaji 2', sans-serif;
}

#root{
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button {
  cursor: pointer;
}

`;
