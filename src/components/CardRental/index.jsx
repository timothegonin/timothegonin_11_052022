import styled from 'styled-components'
import bgTest from '../../assets/bg-card-test.jpg'
const StyledCardRental = styled.article`
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${bgTest});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 34rem;
  min-width: 34rem;
  width: 100%;
  border-radius: 1rem;
  justify-self: center;
  display: flex;
  align-items: flex-end;
`
const StyledCardRentalTitle = styled.h3`
  max-width: 50%;
  margin: 2rem;
  color: white;
  font-weight: 500;
  font-size: 1.8rem;
`
const CardRental = () => {
  return (
    <StyledCardRental>
      <StyledCardRentalTitle>Card-Rental</StyledCardRentalTitle>
    </StyledCardRental>
  )
}
export default CardRental
