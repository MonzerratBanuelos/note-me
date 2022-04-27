/* eslint-disable react/prop-types */
import '../views/Login.css';
import logo from '../resource/NoteMe.png';
import google from '../resource/google.png';
// import { useNavigate } from "react-router-dom";
import { LoginGoogle } from '../firebase-store/firebase-auth';
// import { auth,} from '../firebase-store/firebaseKeys';
// import { provider } from '../firebase-store/firebase-auth';
// import { signInWithPopup } from '../firebase-store/firebase-imports';
// import { useAuth } from '../context/authContext';

function Login({handleSetAutenticate}) {
// const  {user}  = useAuth()
//  const authContext = useContext(context)
// console.log(user)


  const handleClickGoogle = async () => {
    await LoginGoogle();
  }

  return (
    <>
    <div className='App'>
      <button onClick={()=>{handleSetAutenticate()}}>Ya entreeeee</button>
      <img src={logo} className='App-logo' alt='logo' />
      <h1>Your favorite note place!!</h1>
      <button className='btnGoogle' onClick={ handleClickGoogle }>
        Login with
        <img src={google} className='Google-logo' alt='google' />
      </button>
    </div>
    </>
  );
}

export default Login;
