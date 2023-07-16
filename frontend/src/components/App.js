import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { register, login, tokencheck, userEdit } from '../utils/Auth';
import Main from './main/Main';
import Movies from './movies/Movies';
import Registration from '../components/register/Registration';
import Login from '../components/login/Login';
import SavedMovies from '../components/savedMovies/SavedMovies';
import Profile from '../components/profile/Profile';
import NotFound from './notFound/NotFound';
import ProtectedRouteElement from './ProtectedRoute';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import InfoTool from './infoToolTip/InfoTool';

function App() {
  const navigate = useNavigate();

  const [isloggedIn, setIsloggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [infoTool, setInfoTool] = useState({ text: '', statusOk: true, opened: false })

  useEffect(() => {
    function handleTokenCheck() {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        return tokencheck(jwt).then((res) => {
          setIsloggedIn(true)
          setCurrentUser({
            ...currentUser,
            ...res
          });
        })
          .then(() => {
            navigate("/movies", { replace: true })
          })
          .catch(err => {

            setInfoTool({ text: err, statusOk: true, opened: false })
      })
    }
  }

    handleTokenCheck()
    return () => { }
}, []);

async function handleRegistration(name, email, password, e) {
  return register(name, email, password)
    .then((res) => {
      e.target.reset()
    })
}

async function handleLogin(email, password, e) {
  return login(email, password)
    .then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        setIsloggedIn(true);
        navigate("/movies", { replace: true })
      }
      e.target.reset()
    })
}

async function handleUserEdit(name, email) {
  return userEdit(name, email)
    .then(res => {
      setCurrentUser({
        ...currentUser,
        ...res
      })
      navigate("/movies", { replace: true })
    })
}

async function goExit() {
  localStorage.clear();
  setIsloggedIn(false)
  navigate('/', { replace: true });
}

function closeInfoTool() {
  setInfoTool({ ...infoTool, opened: false });
}

useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeInfoTool();
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, []);

return (
  <div className="App">
    <CurrentUserContext.Provider value={currentUser} >
      <Routes>

        <Route path='/' element={<Main isloggedIn={isloggedIn} />} />

        <Route path='/signup' element={isloggedIn ? <Navigate to='/' /> : <Registration onLogin={handleLogin} onRegistration={handleRegistration} setInfoTool={setInfoTool} closeInfoTool={closeInfoTool} />} />

        <Route path='/signin' element={isloggedIn ? <Navigate to='/' /> : <Login onLogin={handleLogin} setInfoTool={setInfoTool} closeInfoTool={closeInfoTool} />} />

        <Route path='/saved-movies' element={<ProtectedRouteElement loggedIn={isloggedIn} element={SavedMovies} isloggedIn={isloggedIn} setInfoTool={setInfoTool} closeInfoTool={closeInfoTool} />} />

        <Route path='/movies' element={<ProtectedRouteElement loggedIn={isloggedIn} element={Movies} isloggedIn={isloggedIn} setInfoTool={setInfoTool} closeInfoTool={closeInfoTool} />} />

        <Route path='/profile' element={<ProtectedRouteElement goExit={goExit} loggedIn={isloggedIn} element={Profile} onUserEdit={handleUserEdit} isloggedIn={isloggedIn} setInfoTool={setInfoTool} closeInfoTool={closeInfoTool} />} />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </CurrentUserContext.Provider>

    <InfoTool text={infoTool.text} statusOk={infoTool.statusOk} opened={infoTool.opened} onClose={closeInfoTool} />
  </div>
);
}

export default App;
