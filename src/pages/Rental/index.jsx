import React from 'react'
import Carrousel from '../../components/Carrousel'
import RentalInfo from '../../components/RentalInfo'
import RentalHost from '../../components/RentalHost'
import styled from 'styled-components'

const RentalInfosWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`
const Rental = () => {
  return (
    <React.Fragment>
      <Carrousel />
      <RentalInfosWrapper>
        <RentalInfo />
        <RentalHost />
      </RentalInfosWrapper>
    </React.Fragment>
  )
}
export default Rental
