import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 2.4rem;
  padding-left: 5.7rem;
`
const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 30.9rem;
`

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to={'/'}>Accueil</StyledLink>
      <StyledLink to={'/about'}>A Propos</StyledLink>
    </StyledNav>
  )
}
export default Nav
