import styled from 'styled-components'
import colors from '../../utils/style/colors'
import AccordionIcon from '../../assets/arrow_back.svg'

const AccordionWrapper = styled.div`
  margin: 3.1rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const AccordionButton = styled.button`
  border: none;
  max-width: 102.3rem;
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
`
const Accordion = () => {
  return (
    <AccordionWrapper>
      <AccordionButton>
        Fiabilité
        <img src={AccordionIcon} alt="Accordion toggler" />
      </AccordionButton>
      <div>
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
    </AccordionWrapper>
  )
}
export default Accordion
