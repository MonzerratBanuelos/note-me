import {NavLink} from 'react-router-dom'

function Navigation () {
    return (
        <div>
            <ul>
                <button>
                    <NavLink to='note-me/'>Home</NavLink>
                </button>
                <li>
                    <NavLink to='note-me/Register'>Register</NavLink>
                </li>
                <li>
                    <NavLink to='note-me/Feed'>Feed</NavLink>
                </li>
                <li>
                    <NavLink to='note-me/About'>About</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Navigation;