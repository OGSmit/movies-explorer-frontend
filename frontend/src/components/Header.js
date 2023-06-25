import './Header.css'
import logo from '../image/header__logo.svg';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className='header'>
      <Link to='/' className='header__logo-link'><img alt='логотип проекта' src={logo} className='header__logo' /></Link>
      <div className='header__movie-nav'>
        <Link to='/movies' className='header__link-movie'>Фильмы</Link>
        <Link to='/saved-movies' className='header__link-movie'>Сохранённые фильмы</Link>
      </div>
      <button className='header__burger' type='button'></button> 
      <div className='header__account-info'>
        <p className='header__account-name'>Аккаунт</p>
        <Link to='/profile' className='header__account-logo'></Link>
      </div>
    </div>
  )
}

export default Header;