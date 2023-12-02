import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Rental from '../../pages/Rental'
import About from '../../pages/About'
import Error from '../../pages/Error'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timothe_gonin_11_052022.git" element={<Home />} />
      <Route path="rental/:id" element={<Rental />} />
      <Route path="about" element={<About />} />
      <Route path="error-404" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router
