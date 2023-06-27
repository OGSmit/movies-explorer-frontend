import './BurgerMenu.css'
import { NavLink, Link, useLocation } from 'react-router-dom';
function BurgerMenu({ isOpened , onClose }) {
const location = useLocation()
  return (
    <div className={isOpened ? 'burger-menu' : 'burger-menu_close'}>
      <button onClick={onClose} className='burger-menu__button-close' type='button'></button>
      <nav className='burger-menu__nav'>
        <NavLink to='/' className={location.pathname === '/' ? 'burger-menu_link-active' : 'burger-menu_link'}>Главная</NavLink>
        <NavLink to='/movies' className={location.pathname === '/movies' ? 'burger-menu_link-active' : 'burger-menu_link'}>Фильмы</NavLink>
        <NavLink to='/saved-movies' className={location.pathname === '/saved-movies' ? 'burger-menu_link-active' : 'burger-menu_link'}>Сохраненые фильмы</NavLink>
      </nav>
        <div className='burger-menu__account-info'>
          <p className='burger-menu__account-name'>Аккаунт</p>
          <Link to='/profile' className='burger-menu__account-logo'></Link>
        </div>
    </div>
  )
}

export default BurgerMenu;