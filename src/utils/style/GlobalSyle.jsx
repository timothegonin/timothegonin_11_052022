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
  }
  body{
    display: flex;
    justify-content: center;
    #root{
      padding:0 10rem;
      width: 100%;
      max-width: 144rem;
      @media screen and (max-width:768px) {
        padding:0 2rem;
      }
    }
  }

`
export default StyledGlobalStyle
