import exitImg from '../../resource/exitImg.png'

function Header (userInfo) {
  console.log(userInfo)
return <>
  <header>
    <img src={userInfo.userInfo.Name.photoURL} className='User-photo' alt='logo' /> 
    <h3>{userInfo.userInfo.displayName}</h3>
    <button className='LogOut'>
  <img src={exitImg} className='exit-Logo' alt='Exit' />
  </button>
</header>
</>
}
export default Header;