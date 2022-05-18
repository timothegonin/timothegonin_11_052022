import styled from 'styled-components'
import Background from '../../assets/home-banner.jpg'

const StyledBanner = styled.section`
  max-width: 1240px;
  height: 223px;
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6.3rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    color: white;
    font-weight: 500;
    font-size: 4.8rem;
  }
`

const Banner = () => {
  return (
    <StyledBanner>
      <h2>Chez vous, partout et ailleurs</h2>
    </StyledBanner>
  )
}
export default Banner
