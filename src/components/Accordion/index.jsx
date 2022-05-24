import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import AccordionIcon from '../../assets/arrow_back.svg'

const AccordionContainer = styled.div`
  margin: 3.1rem 0;
  width: 100%;

  max-width: 102.3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.lightGray};
  border-radius: 0.5rem;
  p {
    padding: 1.9rem 1.8rem;
    font-weight: 400;
    font-size: 24px;
    color: ${colors.primary};
    @media screen and (max-width: 576px) {
      font-size: 12px;
      padding-bottom: 5rem;
    }
  }
`

const AccordionButton = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  height: 4.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.8rem;
  padding-right: 3rem;
  border-radius: 0.5rem;
  background-color: ${colors.primary};
  color: white;
  font-weight: 500;
  font-size: 24px;
  img.close {
    transform: rotate(0deg);
    transition: 0.3s;
  }
  img.open {
    transform: rotate(180deg);
    transition: 0.3s;
  }
  @media screen and (max-width: 576px) {
    height: 3rem;
    padding-left: 1.5rem;
    padding-right: 0.5rem;
    font-size: 13px;
    img {
      height: 1.8rem;
      width: 1.8rem;
    }
  }
`

const Accordion = () => {
  const [diplayed, handleAccordion] = useState(false)

  return (
    <AccordionContainer>
      <AccordionButton onClick={() => handleAccordion(diplayed ? false : true)}>
        Fiabilité
        <img
          src={AccordionIcon}
          alt="Accordion toggler"
          className={diplayed ? 'open' : 'close'}
        />
      </AccordionButton>
      {diplayed && (
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      )}
    </AccordionContainer>
  )
}
export default Accordion
