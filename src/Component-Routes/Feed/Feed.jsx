/* eslint-disable react/jsx-key */
import './Feed.css'
import { useEffect, useState} from 'react';
import { collection, onSnapshot } from '../../firebase-store/firebase-imports';
import exitImg from '../../resource/exitImg.png';
import addSign from '../../resource/addSign.png';
import Pencil from '../../resource/Pencil.png';
import Trash from '../../resource/Trash.png'
import { db, auth } from '../../firebase-store/firebaseKeys';
import { useNavigate } from 'react-router-dom';


function Feed({handleExit, UserInfo}) {
  const navigate = useNavigate();

  const [ noteList , setNoteList] = useState([]);

  const getNotes = async () => {
    onSnapshot(collection(db, 'users', auth.currentUser.uid, 'notes'), (querySnapShot) => {
      const documents = [];
      querySnapShot.forEach(note => {
        documents.push({...note.data(), id: note.id});
      });
    setNoteList(documents)
  });
};

  useEffect(() => {
    getNotes()
  }, []);
  

  return (
    <div className='feedPage'>
      <header>
      <img src={UserInfo.photoURL} className='User-photo' alt='logo' />
      <h3>{UserInfo.displayName}</h3>
      <button className='LogOut' onClick={()=>{
        handleExit().then(()=>{console.log('good bye')})
      }}>
      <img src={exitImg} className='exit-Logo' alt='Exit' />
      </button>
      </header>
      <div className='notesContainer'>
      {noteList.map((post)=> {
        return <section className='noteContainer' key={post.id}>
        <section className='btnSection'>
        <button className='editButton' onClick={() => {console.log('En un futuro editaré')}}>
      <img src={Pencil} className='editImgBtn' alt='Editbtn' />
      </button>
        <button className='eraseButton' onClick={() => {console.log('En un futuro eliminaré')}}>
        <img src={Trash} className='eraseImgBtn' alt='Erasebtn' />
        </button>
        </section>
          <h1 className='noteTitle'>{post.title}</h1>
          <p className='noteContent'>{post.note}</p>
      <p className='noteAuthor'>Author:{post.author}</p>
          </section>;
      
      })};
      
      
      </div>
      <button className='addNoteBtn' onClick={()=> {navigate('/MakeNote')}}>
      <img src={ addSign } className='addBtn' alt='addBtn' />
      </button>
      
    </div>
  );
}

export default Feed;