/* eslint-disable react/prop-types */
import '../views/Login.css';
import logo from '../resource/NoteMe.png';
import google from '../resource/google.png';
import { useNavigate } from "react-router-dom";
// import { useAuth } from '../context/authContext';

function Login({handleSetAutenticate}) {
// const  {user}  = useAuth()
//  const authContext = useContext(context)
// console.log(user)


  const navigate = useNavigate();
  function handleClick () {
    navigate('Feed');
  }
  return (
    <>
    <div className='App'>
      <button onClick={()=>{handleSetAutenticate()}}>Ya entreeeee</button>
      <img src={logo} className='App-logo' alt='logo' />
      <h1>Your favorite note place!!</h1>
      <button className='btnGoogle' onClick={ handleClick }>
        Login with
        <img src={google} className='Google-logo' alt='google' />
      </button>
    </div>
    </>
  );
}

export default Login;
