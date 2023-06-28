import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {

  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className="footer__year">© 2023</p>
        <nav className="footer__nav">
          <Link to="https://practicum.yandex.ru" target="_blank" rel="noreferrer"  className="footer__navLink">Яндекс.Практикум</Link>
          <Link to="https://github.com/OGSmit" target="_blank" rel="noreferrer"  className="footer__navLink">Github</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;