import React from 'react'
import styled from 'styled-components'
import Carrousel from '../../components/Carrousel'
import RentalInfo from '../../components/RentalInfo'
import RentalHost from '../../components/RentalHost'
import Accordion from '../../components/Accordion'
const labelContent = [
  {
    title: 'Description',
    content:
      "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). ",
  },
  {
    title: 'Équipements',
    list: [
      'Climatisation',
      'Wi-Fi',
      'Cuisine',
      'Espace de travail',
      'Fer à repasser',
      'Sèche-cheveux',
      'Cintres',
    ],
  },
]

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
  return (
    <React.Fragment>
      <Carrousel />
      <RentalInfosWrapper>
        <RentalInfo />
        <RentalHost />
      </RentalInfosWrapper>
      <RentaDescriptionWrapper>
        <div>
          <Accordion
            size="small"
            title={labelContent[0].title}
            content={labelContent[0].content}
          />
        </div>
        <div>
          <Accordion
            size="small"
            title={labelContent[0].title}
            content={labelContent[0].content}
          />
        </div>
      </RentaDescriptionWrapper>
    </React.Fragment>
  )
}
export default Rental
