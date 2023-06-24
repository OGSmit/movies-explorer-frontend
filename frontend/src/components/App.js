import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from './main/Main';
import Movies from './movies/Movies'
import Registration from '../components/register/Registration';
import Login from '../components/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Main />} />

        <Route path='/sign-up' element={<Registration />} />

        <Route path='/sign-in' element={<Login />} />

        <Route path="/main" element={ <Movies />} />

      </Routes>
    </div>
  );
}

export default App;
