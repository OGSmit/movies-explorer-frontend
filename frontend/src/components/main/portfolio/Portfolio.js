import './Portfolio.css'
import linkLogo from '../../../image/portfolio__link-icon.svg'
import { Link } from 'react-router-dom';

function Portfolio() {

  return (
    <section className='portfolio'>
      <p className='portfolio__description'>Портфолио</p>
      <nav className='portfolio__list'>
        <div className='portfolio__link-container'>
          <Link to='https://ogsmit.github.io/how-to-learn/' target="_blank" rel="noreferrer" className='portfolio__link'>Статичный сайт</Link>
          <img alt='иконка стрелки' className='portfolio__icon' src={linkLogo} />
        </div>
        <div className='portfolio__link-container'>
          <Link to='https://ogsmit.github.io/russian-travel' target="_blank" rel="noreferrer" className='portfolio__link'>Адаптивный сайт</Link>
          <img alt='иконка стрелки' className='portfolio__icon' src={linkLogo} />
        </div>
        <div className='portfolio__link-container'>
          <Link to='https://ogsmit.nomoredomains.monster' target="_blank" rel="noreferrer" className='portfolio__link'>Одностраничное приложение</Link>
          <img alt='иконка стрелки' className='portfolio__icon' src={linkLogo} />
        </div>
      </nav>
    </section>
  )
}

// BEM validation done!
export default Portfolio;