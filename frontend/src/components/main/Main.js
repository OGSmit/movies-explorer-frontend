import './Main.css';
import Promo from './promo/Promo';
import AboutMe from './aboutMe/AboutMe';
import Techs from './techs/Techs';
import AboutProject from './aboutProject/AboutProject';
import NavTab from './navTab/NavTab';
import Portfolio from './portfolio/Portfolio';
import HeaderWithoutLogin from './header/Header';
import HeaderWithLogin from '../Header';
import Footer from '../Footer';
import Profile from '../../components/profile/Profile';

function Main({ isloggedIn }) {

  return (
    <section className='main'>
      {isloggedIn ? <HeaderWithLogin /> : <HeaderWithoutLogin />}
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
      <Profile />
    </section>
  )
}

export default Main;