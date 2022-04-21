import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Feed from './component/Feed';
import About from './component/About';
import Page404 from './component/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='note-me/' element={<Login/>} />
        <Route path='note-me/Register' element= {<Register/>} />
        <Route path='note-me/Feed' element = {<Feed/>} />
        <Route path='note-me/About' element={<About/>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
