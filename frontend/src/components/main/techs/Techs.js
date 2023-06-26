import './Techs.css';
import { Element } from 'react-scroll';

function Techs() {

  return (
    <Element name="techs" className="section-wapper">
      <section className="techs" id='techs'>
        <p className='techs__description'>Технологии</p>
        <div className='techs__container'>
          <h2 className='techs__title'>7 технологий</h2>
          <p className='techs__info'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <div className='techs__collection'>
            <span className='techs__item'>HTML</span>
            <span className='techs__item'>CSS</span>
            <span className='techs__item'>JS</span>
            <span className='techs__item'>React</span>
            <span className='techs__item'>Git</span>
            <span className='techs__item'>Express.js</span>
            <span className='techs__item'>mongoDB</span>
          </div>
        </div>
      </section>
    </Element>
  )
}

// BEM validation done!
export default Techs;