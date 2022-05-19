import styled from 'styled-components'
import colors from '../../utils/style/colors'
import CardRental from '../CardRental'
const StyledGallery = styled.main`
  background-color: ${colors.lightGray};
  width: 100%;
  height: auto;
  border-radius: 2.5rem;
  margin-top: 4.3rem;
  padding: 5.6rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 34rem);
  justify-content: space-evenly;
  row-gap: 5.6rem;
  column-gap: 5rem;
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
