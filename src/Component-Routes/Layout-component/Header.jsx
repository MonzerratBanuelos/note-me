import exitImg from '../../resource/exitImg.png'

function Header () {
  <>
  <header>
  {/*  <img src={L} className='User-photo' alt='logo' /> */}
    <h3>hi</h3>
    <button className='LogOut'>
  <img src={exitImg} className='exit-Logo' alt='Exit' />
  </button>
</header>
</>
}
export default Header;