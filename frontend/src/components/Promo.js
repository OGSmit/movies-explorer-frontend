import './Promo.css'

function Promo() {

  return (
    <div className='promo'>
      <p className='promo__description'>О проекте</p>
      <div className='promo__container'>
        <div className='promo__topic-stage'>
        <p className='promo__topic-name'>Дипломный проект включал 5 этапов</p>
        <p className='promo__topic-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='promo__topic-stage'>
        <p className='promo__topic-name'>На выполнение диплома ушло 5 недель</p>
        <p className='promo__topic-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='promo__line-container'>
        <div className='promo__line-20'>
          <p className='promo__line promo__line_green'>1 неделя</p>
          <p className='promo__line-name'>Back-end</p>
        </div>
        <div className='promo__line-80'>
          <p className='promo__line promo__line_gray'>4 недели</p>
          <p className='promo__line-name'>Front-end</p>
        </div>
        </div>
    </div>
  )
}

export default Promo;