import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__description'>Страница не найдена</p>
        <button onClick={handleGoBack} className='not-found__back-link'>Назад</button>
      </div>
    </section>
  );
}

// BEM validation done!
export default NotFound;

