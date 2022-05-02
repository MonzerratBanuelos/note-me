import exitImg from '../../resource/exitImg.png';

function Feed({handleExit, UserInfo}) {

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
      <h1>Your Notes:</h1>
      <section className='noteContainer'>
      <h3>Este será el titulo de la nota</h3>
      <p>Este será el contenido de la nota,
        Esto es un texto de prueba, shalala, 
        <button className='editButton'>Editar</button>
        <button className='eraseButton'>Eliminar</button>
      </p>
      </section>
      
    </div>
  );
}

export default Feed;