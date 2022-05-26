import React from 'react'
import Carrousel from '../../components/Carrousel'
import RentalInfo from '../../components/RentalInfo'
import RentalHost from '../../components/RentalHost'

const Rental = () => {
  return (
    <React.Fragment>
      <Carrousel />
      <section>
        <RentalInfo />
        <RentalHost />
      </section>
    </React.Fragment>
  )
}
export default Rental
