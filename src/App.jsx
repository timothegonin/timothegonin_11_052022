import React from 'react'
import StyledGlobalStyle from './utils/style/GlobalSyle'
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './components/Router'

const App = () => {
  return (
    <React.Fragment>
      <StyledGlobalStyle />
      <Header />
      <Router />
      <Footer />
    </React.Fragment>
  )
}

export default App
