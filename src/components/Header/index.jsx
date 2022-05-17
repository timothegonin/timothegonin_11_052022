import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Kasa logo" />
      <nav>
        <Link to={'/'}>Accueil</Link>
        <Link to={'/about'}>A Propos</Link>
      </nav>
    </header>
  )
}
export default Header
