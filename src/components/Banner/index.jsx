import styled from 'styled-components'
import Background from '../../assets/home-banner.jpg'

const BannerWrapper = styled.section`
  max-width: 124rem;
  width: 100%;
  padding: 0 2rem;
  margin-top: 6.3rem;
  @media screen and (max-width: 992px) {
    margin-top: 1.6rem;
  }
`
const BannerBackground = styled.div`
  width: 100%;
  height: 223px;
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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

  @media screen and (max-width: 992px) {
    height: 11.1rem;
    border-radius: 1rem;
    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      margin: 0 1.6rem;
    }
  }
`

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerBackground>
        <h2>Chez vous, partout et ailleurs</h2>
      </BannerBackground>
    </BannerWrapper>
  )
}
export default Banner
