import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StyledGlobalStyle from './utils/style/GlobalSyle'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Rental from './pages/Rental'
import About from './pages/About'
import Error from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <StyledGlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rental/:id" element={<Rental />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
)
