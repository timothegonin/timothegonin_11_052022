import styled from 'styled-components'
import colors from '../../utils/style/colors'
import CardRental from '../CardRental'

const GalleryWrapper = styled.main`
  margin-top: 4.3rem;
  padding-right: 2rem;
  padding-left: 2rem;
  width: 100%;
`
const StyledGallery = styled.div`
  background-color: ${colors.lightGray};
  /* height: auto; */
  border-radius: 2.5rem;

  padding: 5.6rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 34rem);
  justify-content: space-evenly;
  row-gap: 5.6rem;
  column-gap: 1rem;

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
    <GalleryWrapper>
      <StyledGallery>
        <CardRental />
        <CardRental />
        <CardRental />
        <CardRental />
        <CardRental />
        <CardRental />
      </StyledGallery>
    </GalleryWrapper>
  )
}
export default Gallery
