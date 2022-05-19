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
  width: 34rem;
  border-radius: 1rem;
  justify-self: center;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 786px) {
    height: 25.5rem;
    width: 33.5rem;
  }
`
const StyledCardRentalTitle = styled.h3`
  display: inline-flex;
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
