/* eslint-disable react/jsx-key */
import './Feed.css'
import addSign from '../../resource/addSign.png';
import Pencil from '../../resource/Pencil.png';
import Trash from '../../resource/Trash.png'
import { useEffect, useState} from 'react';
import { collection, onSnapshot, orderBy, query} from '../../firebase-store/firebase-imports';
import { db, auth } from '../../firebase-store/firebaseKeys';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../Layout-component/Header';
import DeleteNote from '../DeleteNote';


function Feed({handleExit, UserInfo}) {
  const navigate = useNavigate();
  const [ noteList , setNoteList] = useState([]);

  const getNotes = async () => {
    const collRef= collection(db, 'users', auth.currentUser.uid, 'notes')
    const q = query(collRef, orderBy('date', 'desc'));
    onSnapshot(q, (querySnapShot) => {
      const documents = [];
      querySnapShot.forEach(note => {
        documents.push({ ...note.data(), id: note.id});
      });
    setNoteList(documents)
    });
  };

  useEffect(() => {
    getNotes()
  }, []);

  
  

  return (
    <div className='feed-page'>
      <Header handleExit={handleExit} UserInfo={UserInfo}></Header>
      <div className='notes-container'>
        {noteList.map((post)=> {
          return <section className='note-container' key={post.id}>
          <h2 className='note-title'>{post.title}</h2>
          <pre className='note-content'>{post.note}</pre>
          <p className='note-author'>Author:{post.author}</p>
          <p className='note-time'>{post.dateTime}</p>
          <section className='btn-section'>
        <button className='edit-button' onClick={() => {}}>
        <Link to={`EditNote/${post.id}`}><img src={Pencil} className='edit-img-btn' alt='Editbtn' /></Link>
        </button>
        <button className='erase-button' onClick={() => {DeleteNote(post.id)}}>
        <img src={Trash} className='erase-img-btn' alt='Erasebtn' />
        </button>
        </section>
          </section>;
      })};
      </div>

      <button className='add-note-btn' onClick={()=> {navigate('/note-me/MakeNote')}}>
      <img src={ addSign } className='add-btn' alt='addBtn' />
      </button>
    </div>
  );
}

export default Feed;