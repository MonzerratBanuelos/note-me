import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './views/Login';
import MakeNote from './views/MakeNote';
import Feed from './views/Feed';
import About from './views/About';
import Page404 from './views/Page404';

import Navigation from './Components/Navigation';
function App() {
  return (
    <BrowserRouter>

    <Navigation/>  

      <Routes>
        <Route path='note-me/' element={<Login/>} />
        <Route path='note-me/MakeNote' element= {<MakeNote/>} />
        <Route path='note-me/Feed' element = {<Feed/>} />
        <Route path='note-me/About' element={<About/>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
