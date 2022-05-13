import './EditNote.css';
import { useState, useEffect } from 'react';
import { getDoc, doc, updateDoc } from '../../firebase-store/firebase-imports';
import { auth,db } from '../../firebase-store/firebaseKeys';
import { useNavigate, useParams} from 'react-router-dom';
import Header from '../Layout-component/Header';

function EditNote({handleExit, UserInfo}) {
  
  const navigate = useNavigate();
  const { id } = useParams();
  // Esta es la caja para los valores, esta vacio
  const initialStateValues = {
    title:'',
    note:'',
  };
  // Aqui se inicia la caja con los valores de arriba, lo inicias vacio
  const [noteData, setNoteData] = useState(initialStateValues)
  // Aqui llenas la caja con el documento que obtienes de firebase
  const getMyNote = async(id) => {
  const docRef=doc(db, 'users', auth.currentUser.uid, 'notes',id)
  const noteRef = await getDoc(docRef);
  // Especificamente aquí lo estas llenando
  setNoteData(noteRef.data());
  console.log(noteRef.data())
  }
  // Con esto estas logrando que se vea en pantalla los datos obtenidos 
  useEffect( () => {
    getMyNote(id)
  }, []); 
/*
const handleChange = (event)=> {
  const { title, noteData } = event.target
  setNoteData({ ...noteData, title : event.target.value})
  console.log('title con', title)
}

  const handleChangeNote = (event)=> {
  const { note, noteData } = event.target
  setNoteData({ ...noteData, note : event.target.value})
  console.log('noteloestoydando', note )
} */
// aquí actualizamos la nota y despues mandamos al feed
const updateNote = async (id) => {
  await updateDoc(doc(db, 'users', auth.currentUser.uid, 'notes', id), noteData)
  console.log(noteData)
  navigate('/note-me')
};


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
      value ={noteData.title}
      onChange={(event)=>  setNoteData({ ...noteData, title: event.target.value})}
      />
      
      <label>Note:</label>
      <textarea 
      className='input-notes'
      type='text'
      name='note'
      id='make-note-content'
      placeholder='Ex. Dont forget to pick up the laundry before 6 pm'
      value={noteData.note}
      onChange={(e)=> setNoteData({ ...noteData, note : e.target.value})}
      />
      <button className='buttons-styles' onClick={()=>{updateNote(id)}}>Update Note</button>
      <button className='buttons-styles' onClick={()=>{navigate('/note-me')}}>Cancel</button>

      
    </div>
  );
}

export default EditNote;