import styled from 'styled-components'
import colors from '../../utils/style/colors'
import CardRental from '../CardRental'
const StyledGallery = styled.main`
  background-color: ${colors.lightGray};
  max-width: 124rem;
  height: auto;
  border-radius: 2.5rem;
  margin-top: 4.3rem;
  padding: 5.6rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 34rem);
  justify-content: space-evenly;
  row-gap: 5.6rem;
  column-gap: 5rem;
  @media screen and (max-width: 1436px) {
    padding: 5.6rem 2.5rem;
  }
  @media screen and (max-width: 886px) {
    justify-content: space-evenly;
    width: auto;
    padding: 0;
    margin: 0;
    margin-top: 2.2rem;
    row-gap: 2rem;
    background: none;
  }
`

const Gallery = () => {
  return (
    <StyledGallery>
      <CardRental />
      <CardRental />
      <CardRental />
      <CardRental />
      <CardRental />
      <CardRental />
    </StyledGallery>
  )
}
export default Gallery
