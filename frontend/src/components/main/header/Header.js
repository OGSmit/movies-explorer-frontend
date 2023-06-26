import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../../image/header__logo.svg';

function Header() {

  return (
    <header className='header'>
      <Link to='/' className='header__logo-link'><img alt='логотип' src={logo} /></Link>
      <div className='header__container'>
        <Link to='/sign-up' className='header__button header__button_signIn'>Регистрация</Link>
        <Link to='/sign-in' className='header__button header__button_enter'>Войти</Link>
      </div>
    </header>
  )
}

// BEM validate done!
export default Header;