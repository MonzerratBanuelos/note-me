import './MakeNote.css';
import { useState } from 'react';
import { addDoc, collection } from '../../firebase-store/firebase-imports';
import { auth,db } from '../../firebase-store/firebaseKeys';
import { useNavigate } from 'react-router-dom';

function MakeNote(props) {
console.log(props)

const [ title, setTitle ] = useState('')
const [ note, setNote ] = useState('')
const navigate = useNavigate();

// const notesCollectionRef = collection(db, "notes");

const createNote = async () => {
  await addDoc(collection(db, 'notes'), {
  title,
  note,
  author: auth.currentUser.displayName,
  id: auth.currentUser.uid,
})
navigate('/')
};


const handleChangeTitle = (e)=> {
setTitle(e.target.value)
}
const handleChangeNote = (e)=> {
setNote(e.target.value)
}


  return (
    <div className='makeNotePage'>
      <header>
      <img src={props.Name.photoURL} className='User-photo' alt='logo' />
      <h3>{props.Name.displayName}</h3>
      </header>
      <h1>Create your note</h1>
      <label>Title:</label>
      <input 
      className='inputNotes'
      type='text'
      name='makeNoteTitle'
      id='makeNoteTitle'
      placeholder='Ex. Laundry'
      onChange={handleChangeTitle}
      />
      
      <label>Note:</label>
      <textarea 
      className='inputNotes'
      type='text'
      name='makeNoteContent'
      id='makeNoteContent'
      placeholder='Ex. Dont forget to pick up the laundry before 6 pm'
      onChange={handleChangeNote}
      />
      <button className='buttonsStyles' onClick={createNote}>Publish</button>

      
    </div>
  );
}

export default MakeNote;
