import './Footer.css';
function Footer() {

  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className="footer__year">© 2023</p>
        <nav>
          <ul className='footer__nav-list'>
            <li><a href="https://practicum.yandex.ru" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a></li>
            <li><a href="https://github.com/OGSmit" target="_blank" rel="noreferrer" className="footer__link">Github</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;