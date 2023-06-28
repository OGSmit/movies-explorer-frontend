import './Main.css';
import Promo from './promo/Promo';
import AboutMe from './aboutMe/AboutMe';
import Techs from './techs/Techs';
import AboutProject from './aboutProject/AboutProject';
import NavTab from './navTab/NavTab';
import Portfolio from './portfolio/Portfolio';
import Header from '../Header';
import Footer from '../Footer';

function Main({ isloggedIn }) {

  return (
    <section className='main'>
      <Header isloggedIn={isloggedIn} />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </section>
  )
}

export default Main;