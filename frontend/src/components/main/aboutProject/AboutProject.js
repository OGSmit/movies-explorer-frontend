import './AboutProject.css'
import { Element } from 'react-scroll';

function AboutProject() {

  return (
    <section className='aboutProject' id='aboutProject'>
      <Element name="aboutProject">
        <h2 className='aboutProject__description'>О проекте</h2>
        <div className='aboutProject__container'>
          <div className='aboutProject__topic-stage'>
            <h3 className='aboutProject__topic-name'>Дипломный проект включал 5 этапов</h3>
            <p className='aboutProject__topic-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='aboutProject__topic-stage'>
            <h3 className='aboutProject__topic-name'>На выполнение диплома ушло 5 недель</h3>
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
      </Element>
    </section>
  )
}

// BEM validate done!
export default AboutProject;