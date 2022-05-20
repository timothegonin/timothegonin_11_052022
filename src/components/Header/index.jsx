import styled from 'styled-components'
import Logo from '../../assets/logo.svg'
import Nav from '../Nav'

const SyledLogo = styled.img`
  height: 6.8rem;
  width: 21rem;
  @media screen and (max-width: 576px) {
    height: 4.7rem;
    width: 14.5rem;
  }
`
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  width: 100%;
  @media screen and (max-width: 576px) {
    margin-top: 2rem;
  }
`
const Header = () => {
  return (
    <StyledHeader>
      <SyledLogo src={Logo} alt="Kasa logo" />
      <Nav />
    </StyledHeader>
  )
}
export default Header
