import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import MakeNote from './views/MakeNote';
import Feed from './views/Feed';
import Register from './views/Register';
import Page404 from './views/Page404';
import { AuthProvider } from './context/authContext';

import Navigation from './Components/Navigation';
function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/MakeNote' element={<MakeNote />} />
        <Route path='/Feed' element={<Feed />} />
        <Route path='/Register' element={<Register />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
