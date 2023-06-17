import './About.css'

function About() {

  return (
    <div className='about'>
      <p className='about__description'>О проекте</p>
      <div className='about__container'>
        <div className='about__topic-stage'>
        <p className='about__topic-name'>Дипломный проект включал 5 этапов</p>
        <p className='about__topic-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about__topic-stage'>
        <p className='about__topic-name'>На выполнение диплома ушло 5 недель</p>
        <p className='about__topic-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about__line-container'>
        <div className='about__line-20'>
          <p className='about__line about__line_green'>1 неделя</p>
          <p className='about__line-name'>Back-end</p>
        </div>
        <div className='about__line-80'>
          <p className='about__line about__line_gray'>4 недели</p>
          <p className='about__line-name'>Front-end</p>
        </div>
        </div>
    </div>
  )
}

export default About;