/* eslint-disable react/prop-types */
import './Login.css';
import logo from '../../resource/NoteMe.png'
import google from '../../resource/google.png';
import { LoginGoogle } from '../../firebase-store/firebase-auth';

function Login() {

  return (
    <>
    <div className='login-container'>
      <img src={logo} className='note-logo' alt='logo' />
      <button className='buttons-styles-login' onClick={ ()=>{ LoginGoogle()} }>
        Login with
        <img src={google} className='google-logo' alt='google' />
      </button>
      <br/>
    </div>
    </>
  );
}

export default Login;