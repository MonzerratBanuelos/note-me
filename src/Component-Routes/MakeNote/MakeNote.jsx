import './MakeNote.css';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from '../../firebase-store/firebase-imports';
import { auth,db } from '../../firebase-store/firebaseKeys';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout-component/Header';

function MakeNote({handleExit, UserInfo}) {

const [ title, setTitle ] = useState('')
const [ note, setNote ] = useState('')
const navigate = useNavigate();

// const notesCollectionRef = collection(db, "notes");

const createNote = async () => {
  await addDoc(collection(db, 'users', auth.currentUser.uid, 'notes'), {
  title,
  note,
  author: auth.currentUser.displayName,
  id: auth.currentUser.uid,
  date: serverTimestamp(),
  dateTime: new Date().toLocaleDateString(),
})
navigate('/note-me')
};


const handleChangeTitle = (e)=> {
setTitle(e.target.value)
}
const handleChangeNote = (e)=> {
setNote(e.target.value)
}


  return (
    <div className='make-note-page'>
      <Header handleExit={handleExit}UserInfo= { UserInfo}></Header>
      <h1>Create your note</h1>
      <label>Title:</label>
      <input 
      className='input-notes'
      type='text'
      name='title'
      id='make-note-title'
      placeholder='Ex. Laundry'
      onChange={handleChangeTitle}
      />
      
      <label>Note:</label>
      <textarea 
      className='input-notes'
      type='text'
      name='note'
      id='make-note-content'
      placeholder='Ex. Dont forget to pick up the laundry before 6 pm'
      onChange={handleChangeNote}
      />
      <button className='buttons-styles' onClick={()=>{createNote()}}>Publish</button>
      <button className='buttons-styles' onClick={()=>{navigate('/note-me')}}>Cancel</button>

      
    </div>
  );
}

export default MakeNote;