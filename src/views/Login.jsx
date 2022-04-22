import '../views/Login.css'
import logo from '../resource/NoteMe.png'
import google from '../resource/google.png'

function Login () {
  return (
    <div className="App">
      <img
        src={logo}
        className="App-logo" alt="logo" />
      <h1>Your favorite note place!!</h1>
      <button className="btnGoogle">Login with
        <img src={google} className='Google-logo' alt='google'/>
      </button>
    </div>
  )
}

export default Login
