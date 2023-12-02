import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RentalsProvider } from './utils/context'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RentalsProvider>
        <App />
      </RentalsProvider>
    </React.StrictMode>
  </BrowserRouter>
)
