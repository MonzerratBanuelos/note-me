import logo from '../resource/NoteMe.png';
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';


function Register() {

const [user, setUser]= useState({
  email:'',
  password:''
});
// te devuelve un objeto
const { signup }= useAuth();
const navigate =  useNavigate();
// eslint-disable-next-line no-unused-vars
const [error, setError] = useState();

// Esta funcion actualiza el estado
const handleChange = ({target: {name, value} })=> {
  setUser({...user, [name]: value})
}

// En esta función se ve lo que tiene el estado 
// Y aqui se encuentra el valor del usuario (su email y contra)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(user.email, user.password);
      console.log('si navego')
    navigate('/');
    } catch(error){
      console.log('no navego')
      console.log(error.message);
        setError("La contraseña es incorrecta");
      }

  
};
// }

  return (
    <div className='App'>

      <img src={ logo } className='App-logo' alt='logo' />
      <h1>Esto es el Register</h1>
      <form onSubmit={ handleSubmit}>
        <label htmlFor='email'>E-mail</label>
        <input
        type='email' 
        name='email' 
        id='email'
        placeholder='YourEmail@hotmail.com'
        onChange={handleChange}/>

        <label htmlFor='password'>Password</label>
        <input 
        type='password' 
        name='password' 
        id='password'
        placeholder='Password'
        onChange={handleChange}/>

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
