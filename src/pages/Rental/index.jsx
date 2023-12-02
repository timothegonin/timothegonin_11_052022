import React, { useContext, useEffect, useState } from 'react'
import { RentalsContext } from '../../utils/context'
import { Navigate, useParams } from 'react-router-dom'
import Loader from '../../utils/style/Loader'
import styled from 'styled-components'
import Carrousel from '../../components/Carrousel'
import RentalInfo from '../../components/RentalInfo'
import RentalHost from '../../components/RentalHost'
import Accordion from '../../components/Accordion'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const RentalInfosWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`
const RentaDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  div {
    margin-top: 0;
  }
  @media screen and (max-width: 1224px) {
    flex-direction: column;
    align-items: center;
  }
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ COMPONENT                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Rental = () => {
  const { rentals } = useContext(RentalsContext)
  const [rentalsData, setRentalsData] = useState([])
  const [isValid, setIsValid] = useState(true)

  const { id } = useParams()
  const checkId = (data) => {
    !data && setIsValid(false)
  }

  useEffect(() => {
    setRentalsData(rentals.find((rental) => rental.id === id))
    checkId(rentals.find((rental) => rental.id === id))
  }, [rentals, id])

  return rentalsData.length === 0 ? (
    <Loader />
  ) : isValid ? (
    <main>
      <Carrousel pictures={rentalsData.pictures} />
      <RentalInfosWrapper>
        <RentalInfo
          title={rentalsData.title}
          location={rentalsData.location}
          tags={rentalsData.tags}
        />
        <RentalHost
          name={rentalsData.host.name}
          picture={rentalsData.host.picture}
          rating={rentalsData.rating}
        />
      </RentalInfosWrapper>
      <RentaDescriptionWrapper>
        <div>
          <Accordion
            size="small"
            title="Description"
            content={rentalsData.description}
          />
        </div>
        <div>
          <Accordion
            size="small"
            title="Équipements"
            content={rentalsData.equipments}
          />
        </div>
      </RentaDescriptionWrapper>
    </main>
  ) : (
    <Navigate to="/error-404" />
  )
}
export default Rental
