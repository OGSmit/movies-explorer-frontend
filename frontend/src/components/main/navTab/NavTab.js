import "./NavTab.css"
import { Link } from 'react-scroll';


function NavTab() {

  return (
    <section className="navTab">
      <nav className="navTab__nav">
        <ul className="navTab__list">
          <li><Link smooth={true} duration={500} to="aboutProject" className="navTab__item">О&nbsp;проекте</Link></li>
          <li><Link smooth={true} duration={500} to="techs" className="navTab__item">Технологии</Link></li>
          <li><Link smooth={true} duration={500} to="aboutMe" className="navTab__item">Студент</Link></li>
        </ul>
      </nav>
    </section>
  )
}

// BEM validation done!
export default NavTab;