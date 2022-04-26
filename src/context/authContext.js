import { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword } from '../firebase-imports';
import { auth } from '../firebaseKeys';

export const authContext = createContext();


// Este es un hook personalizado
export const  useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('There is not auth provider');
    return context
  };

// eslint-disable-next-line react/prop-types
export function AuthProvider ({ children }) {
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    console.log(email, password)
};

  return <authContext.Provider value={{ signup }}>{children}</authContext.Provider>

}
