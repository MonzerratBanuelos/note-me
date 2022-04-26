import { useState } from "react"

export function Login () {

  const[user, setUser] = useState({
    email:'',
    user:''
  })

  return <div>
  <form>
    <label htmlFor='email'>E-mail</label>
    <input
    type='email' 
    name='email' 
    id='email'
    placeholder='YourEmail@hotmail.com'/>
    <label htmlFor='password'>Password</label>
    <input 
    type='password' 
    name='password' 
    id='password'
    placeholder='Password'/>

  </form>
  </div>
}