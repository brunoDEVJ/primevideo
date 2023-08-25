import { Link } from 'react-router-dom';
import './header.css'


function Header() {
  return (
    <header>
      <Link className='logo' to={'/primevideo'}>PrimeVideo</Link>
      <Link className='favoritos' to={'/primevideo/favoritos'}>Meus Filmes</Link>
    </header>
  )
}

export default Header;