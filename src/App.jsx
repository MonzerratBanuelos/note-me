import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import MakeNote from './views/MakeNote';
import Feed from './views/Feed';
import Register from './views/Register';
import Page404 from './views/Page404';
import { AuthProvider } from './context/authContext';

import Navigation from './Components/Navigation';
function App() {
  const [isAutenticate, setAutenticate] = useState(false)

  const handleSetAutenticate = () =>{
    setAutenticate(true)
  }

  // hacer login con google 
  // onauthStateChange
      // en caso de haber sesion  vas a ejecutar handleSetAutenticate

  return (
    <BrowserRouter>
    <Navigation />
    <AuthProvider>
     {isAutenticate?<Routes>
        <Route path='/' element={<Feed />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
     : <Routes>
        <Route path='/' element={<Login handleSetAutenticate={handleSetAutenticate } />} /> {/* handleSetAutenticate en futuro esto no lo necesitas en el login */}
        <Route path='/MakeNote' element={<MakeNote />} />
        <Route path='/Register' element={<Register />} />
        <Route path='*' element={<Page404 />} />
     </Routes>}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
