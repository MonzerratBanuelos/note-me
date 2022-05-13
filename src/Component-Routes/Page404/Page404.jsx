import './Page404.css';
import error404 from '../../resource/error404.png';
import { useNavigate } from 'react-router-dom';
function Page404() {

  const navigate = useNavigate()
  function handleClick () {
    navigate('/note-me');
  }
  return (
    <div className='error-container'>
      <img src={error404} className='error-logo' alt='Error Logo' />
      <button className='go-back-btn' alt='Go to Login' onClick={handleClick}>Go to Login</button>
    </div>
  );
}

export default Page404;