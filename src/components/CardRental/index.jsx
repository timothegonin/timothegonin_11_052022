import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledCardRental = styled.article`
  background-color: ${colors.primary};
  height: 34rem;
  min-width: 34rem;
  width: 100%;
  border-radius: 1rem;
  justify-self: center;
  h3 {
    color: white;
    font-weight: 500;
    font-size: 18px;
  }
`
const CardRental = () => {
  return (
    <StyledCardRental>
      <h3>Card-Rental</h3>
    </StyledCardRental>
  )
}
export default CardRental
