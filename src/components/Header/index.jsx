import styled from 'styled-components'
import Logo from '../../assets/logo.svg'
import Nav from '../Nav'

const SyledLogo = styled.img`
  height: 6.8rem;
  width: 21rem;
`
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;
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
