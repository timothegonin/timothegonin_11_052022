import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
  *{
  font-family: 'Montserrat', sans-serif;
  }
  *,
  &::before,
  &::after {
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
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      /* min-height:100vh; */
      /* @media screen and (max-width:1024px) {
        padding:0 2rem;
      } */
      & > * {
        max-width: 124rem;
      }
      & > :last-child {
        max-width: inherit;
      }
    }
  }

`
export default StyledGlobalStyle
