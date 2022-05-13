import exitImg from '../../resource/exitImg.png'

function Header ({handleExit, UserInfo}) {
return <>
  <header>
    <img src={UserInfo.photoURL} className='user-photo' alt='logo' /> 
    <h3>{UserInfo.displayName}</h3>
    <button className='logo-out'  onClick={()=>{
          handleExit().then(()=>{console.log('good bye')})
        }}>
  <img src={exitImg} className='exit-logo' alt='Exit' />
  </button>
</header>
</>
}
export default Header;