import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import HomeBackground from '../../assets/home-banner.jpg'
import AboutBackground from '../../assets/about-banner.jpg'

const BannerWrapper = styled.aside`
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &.banner {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${HomeBackground});
    &:after {
      content: 'Chez vous, partout et ailleurs';
      color: white;
      font-weight: 500;
      font-size: 4.8rem;
    }
    @media screen and (max-width: 992px) {
      height: 11.1rem;
      border-radius: 1rem;
      &:after {
        font-weight: 500;
        font-size: 24px;
        line-height: 100%;
        margin: 0 1.6rem;
      }
    }
    &--tall-no-text {
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${AboutBackground});
      @media screen and (max-width: 992px) {
        border-radius: 1rem;
      }
    }
  }
`

const Banner = () => {
  let location = useLocation().pathname
  let bannerType
  location === '/'
    ? (bannerType = 'banner')
    : (bannerType = 'banner--tall-no-text')
  return (
    <BannerWrapper>
      <BannerBackground className={bannerType} />
    </BannerWrapper>
  )
}
export default Banner
