import React, { createContext } from 'react'
import rentalsData from '../../assets/datas/rentals.json'

export const RentalsContext = createContext()

export const RentalsProvider = ({ children }) => {
  const rentals = rentalsData
  return (
    <RentalsContext.Provider value={{ rentals }}>
      {children}
    </RentalsContext.Provider>
  )
}
