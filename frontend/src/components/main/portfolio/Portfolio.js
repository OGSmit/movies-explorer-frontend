import './Portfolio.css'
import linkLogo from '../../../images/portfolio__link-icon.svg'
import { Link } from 'react-router-dom';

function Portfolio() {

  return (
    <section className='portfolio'>
      <p className='portfolio__description'>Портфолио</p>
      <nav className='portfolio__nav'>
        <ul className='portfolio__list'>
          <li><Link to='https://ogsmit.github.io/how-to-learn/' target="_blank" rel="noreferrer" className='portfolio__link'>
            <span>Статичный сайт</span>
            <img alt='иконка стрелки' className='portfolio__icon' src={linkLogo} />
          </Link></li>
          <li><Link to='https://ogsmit.github.io/russian-travel' target="_blank" rel="noreferrer" className='portfolio__link'>
            <span>Адаптивный сайт</span>
            <img alt='иконка стрелки' className='portfolio__icon' src={linkLogo} />
          </Link></li>
          <li><Link to='https://github.com/OGSmit/react-mesto-api-full-gha' target="_blank" rel="noreferrer" className='portfolio__link'>
            <span>Одностраничное приложение</span>
            <img alt='иконка стрелки' className='portfolio__icon' src={linkLogo} />
          </Link></li>
        </ul>
      </nav>
    </section>
  )
}

// BEM validation done!
export default Portfolio;