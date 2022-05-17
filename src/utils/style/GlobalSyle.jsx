import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
  *{
  font-family: 'Montserrat', sans-serif;
  }
  *,
  ::before,
  ::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
  html{
    font-size:62.5%;
    max-width: 144rem;
  }
  body{
    padding:0 10rem;
  }

`
export default StyledGlobalStyle
