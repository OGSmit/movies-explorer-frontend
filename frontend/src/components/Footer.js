import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className="footer__year">© 2023</p>
        <nav className="footer__nav">
          <a href="https://practicum.yandex.ru" className="footer__navLink">Яндекс.Практикум</a>
          <a href="https://github.com/OGSmit" className="footer__navLink">Github</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;