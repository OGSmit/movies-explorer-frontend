import './Portfolio.css'
import linkLogo from '../../../image/portfolio__link-icon.svg'

function Portfolio() {

  return (
    <section className='portfolio'>
      <p className='portfolio__description'>Портфолио</p>
      <nav className='portfolio__list'>
        <div className='portfolio__link-container'>
          <a href='#' className='portfolio__link'>Статичный сайт</a>
          <img alt='иконка стрелки' className='portfolio__icon' src={linkLogo} />
        </div>
        <div className='portfolio__link-container'>
          <a href='#' className='portfolio__link'>Адаптивный сайт</a>
          <img alt='иконка стрелки' className='portfolio__icon' src={linkLogo} />
        </div>
        <div className='portfolio__link-container'>
          <a href='#' className='portfolio__link'>Одностраничное приложение</a>
          <img alt='иконка стрелки' className='portfolio__icon' src={linkLogo} />
        </div>
      </nav>
    </section>
  )
}

export default Portfolio;