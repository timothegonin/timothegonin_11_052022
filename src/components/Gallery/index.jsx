import styled from 'styled-components'
import colors from '../../utils/style/colors'
const StyledGallery = styled.main`
  background-color: ${colors.lightGray};
  width: 100%;
  height: 50vh;
  border-radius: 2.5rem;
  margin-top: 4.3rem;
  padding: 5.6rem 5rem;
`

const Gallery = () => {
  return <StyledGallery></StyledGallery>
}
export default Gallery
