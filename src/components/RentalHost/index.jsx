import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Profile from '../../assets/profile-test.jpg'
import RateStar from '../../assets/star_rate.svg'

const RentalHostInfoContainer = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 992px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
  }
`
const RetalHostInfo = styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 2rem; */

  h3 {
    display: inline-flex;
    flex-direction: column;
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
    padding: 0 1rem;
    text-align: end;
  }
  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 1.2rem;
    }
    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`
const ReantalStarWrapper = styled.div`
  margin-top: 2rem 0;
  img {
    width: 3.6rem;
    height: 3.6rem;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`
const RentalHost = () => {
  return (
    <RentalHostInfoContainer>
      <RetalHostInfo>
        <h3>
          Alexande <br />
          Dumas
        </h3>
        <img src={Profile} alt="" />
      </RetalHostInfo>
      <ReantalStarWrapper>
        <span>
          <img src={RateStar} alt="" />
        </span>
        <span>
          <img src={RateStar} alt="" />
        </span>
        <span>
          <img src={RateStar} alt="" />
        </span>
        <span>
          <img src={RateStar} alt="" />
        </span>
        <span>
          <img src={RateStar} alt="" />
        </span>
      </ReantalStarWrapper>
    </RentalHostInfoContainer>
  )
}
export default RentalHost
