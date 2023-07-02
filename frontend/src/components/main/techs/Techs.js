import './Techs.css';
import { Element } from 'react-scroll';

function Techs() {

  return (
    <section className="techs" id='techs'>
      <Element name="techs">
        <h2 className='techs__description'>Технологии</h2>
        <div className='techs__container'>
          <h3 className='techs__title'>7 технологий</h3>
          <p className='techs__info'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__collection'>
            <li><span className='techs__item'>HTML</span></li>
            <li><span className='techs__item'>CSS</span></li>
            <li><span className='techs__item'>JS</span></li>
            <li><span className='techs__item'>React</span></li>
            <li><span className='techs__item'>Git</span></li>
            <li><span className='techs__item'>Express.js</span></li>
            <li><span className='techs__item'>mongoDB</span></li>
          </ul>
        </div>
      </Element>
    </section>
  )
}

// BEM validation done!
export default Techs;