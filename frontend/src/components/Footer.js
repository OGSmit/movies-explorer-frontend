import './Footer.css';
function Footer() {

  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className="footer__year">© 2023</p>
        <nav className="footer__nav">
          <a href="https://practicum.yandex.ru" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
          <a href="https://github.com/OGSmit" target="_blank" rel="noreferrer" className="footer__link">Github</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;