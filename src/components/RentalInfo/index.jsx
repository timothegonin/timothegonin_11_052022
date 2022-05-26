import styled from 'styled-components'
import colors from '../../utils/style/colors'
const RentalInfoWrapper = styled.div`
  margin: 2rem;
  h1,
  h2 {
    color: ${colors.primary};
  }
  h1 {
    font-weight: 600;
    font-size: 36px;
  }
  h2 {
    font-weight: 500;
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 18px;
    }
    h2 {
      font-size: 14px;
    }
  }
`
const RentalInfo = () => {
  return (
    <RentalInfoWrapper>
      <h1>Cozy loft on the Canal Saint-Martin</h1>
      <h2>Paris, Île-de-France</h2>
      <div>
        <div>Cozy</div>
        <div>Canal</div>
        <div>Paris 10</div>
      </div>
    </RentalInfoWrapper>
  )
}
export default RentalInfo
