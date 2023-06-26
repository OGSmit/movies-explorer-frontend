import './AboutProject.css'
import { Element } from 'react-scroll';

function AboutProject() {

  return (
    <Element name="aboutProject" className="section-wrapper">
      <section className='aboutProject' id='aboutProject'>
        <p className='aboutProject__description'>О проекте</p>
        <div className='aboutProject__container'>
          <div className='aboutProject__topic-stage'>
            <p className='aboutProject__topic-name'>Дипломный проект включал 5 этапов</p>
            <p className='aboutProject__topic-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='aboutProject__topic-stage'>
            <p className='aboutProject__topic-name'>На выполнение диплома ушло 5 недель</p>
            <p className='aboutProject__topic-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='aboutProject__line-container'>
          <div className='aboutProject__line-20'>
            <p className='aboutProject__line aboutProject__line_green'>1 неделя</p>
            <p className='aboutProject__line-name'>Back-end</p>
          </div>
          <div className='aboutProject__line-80'>
            <p className='aboutProject__line aboutProject__line_gray'>4 недели</p>
            <p className='aboutProject__line-name'>Front-end</p>
          </div>
        </div>
      </section>
    </Element>
  )
}

// BEM validate done!
export default AboutProject;