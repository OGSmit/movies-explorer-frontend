import "./NavTab.css"
import { Link } from 'react-scroll';


function NavTab() {

  return (
    <section className="navTab">
      <nav className="navTab__list">
        <Link smooth={true} duration={500} to="aboutProject" className="navTab__item">О&nbsp;проекте</Link>
        <Link smooth={true} duration={500} to="techs" className="navTab__item">Технологии</Link>
        <Link smooth={true} duration={500} to="aboutMe" className="navTab__item">Студент</Link>
      </nav>
    </section>
  )
}

export default NavTab;