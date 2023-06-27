import './Header.css'
import logo from '../image/header__logo.svg';
import { NavLink, Link, useLocation } from 'react-router-dom';

function Header({ onBurgerOpened }) {
  const location = useLocation();

  return (
    <div className='header'>
      <Link to='/' className='header__logo-link'><img alt='логотип проекта' src={logo} className='header__logo' /></Link>
      <nav className='header__movie-nav'>
        <NavLink to='/movies' className={location.pathname === '/movies' ? 'header__link-movie-active' : 'header__link-movie'}>Фильмы</NavLink>
        <NavLink to='/saved-movies' className={location.pathname === '/saved-movies' ? 'header__link-movie-active' : 'header__link-movie'}>Сохранённые фильмы</NavLink>
      </nav>
      <button onClick={onBurgerOpened} className='header__burger' type='button'></button>
      <div className='header__account-info'>
        <p className='header__account-name'>Аккаунт</p>
        <Link to='/profile' className='header__account-logo'></Link>
      </div>
    </div>
  )
}

export default Header;