import styled from 'styled-components'
import colors from '../../utils/style/colors'
const RentalTagsWrapper = styled.div`
  margin: 2rem 0;
  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`
const RentaTag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: ${colors.primary};
  height: 2.5rem;
  width: 11.5rem;
  color: white;
  font-weight: 500;
  font-size: 14px;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    width: 84px;
    height: 18px;
    border-radius: 0.5rem;
  }
`
const RentalTags = () => {
  return (
    <RentalTagsWrapper>
      <RentaTag>Cozy</RentaTag>
      <RentaTag>Canal</RentaTag>
      <RentaTag>Paris 10</RentaTag>
    </RentalTagsWrapper>
  )
}
export default RentalTags
