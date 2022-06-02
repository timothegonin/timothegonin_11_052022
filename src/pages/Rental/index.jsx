import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../utils/style/Loader'

import styled from 'styled-components'
import Carrousel from '../../components/Carrousel'
import RentalInfo from '../../components/RentalInfo'
import RentalHost from '../../components/RentalHost'
import Accordion from '../../components/Accordion'

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
const Rental = () => {
  const { id } = useParams()
  const [logementsData, setLogementsData] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/datas/logements.json`
        )
        const resultData = await response.json()
        setLogementsData(resultData.find((logement) => logement.id === id))
        setIsDataLoaded(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [id])
  return isDataLoaded ? (
    <Loader />
  ) : (
    <main>
      <Carrousel pictures={logementsData.pictures} />
      <RentalInfosWrapper>
        <RentalInfo
          title={logementsData.title}
          location={logementsData.location}
          tags={logementsData.tags}
        />
        <RentalHost
          name={logementsData.host.name}
          picture={logementsData.host.picture}
          rating={logementsData.rating}
        />
      </RentalInfosWrapper>
      <RentaDescriptionWrapper>
        <div>
          <Accordion
            size="small"
            title="Description"
            content={logementsData.description}
          />
        </div>
        <div>
          <Accordion
            size="small"
            title="Équipements"
            content={logementsData.equipments}
          />
        </div>
      </RentaDescriptionWrapper>
    </main>
  )
}
export default Rental
