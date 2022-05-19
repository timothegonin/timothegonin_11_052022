import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const StyledLink = styled(NavLink)`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 2.4rem;
  &.active {
    text-decoration: underline;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`
const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 30.9rem;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    li {
      margin-left: 5.7rem;
      white-space: nowrap;
    }
  }
  @media screen and (max-width: 576px) {
    ul {
      li {
        margin-left: 1rem;
      }
    }
  }
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ COMPONENTS                                                              │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink to={'/'}>Accueil</StyledLink>
        </li>
        <li>
          <StyledLink to={'/about'}>A Propos</StyledLink>
        </li>
      </ul>
    </StyledNav>
  )
}
export default Nav
