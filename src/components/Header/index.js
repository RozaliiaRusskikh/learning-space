import Logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import './index.css'

function Header() {
    return (
        <div className="App-header">
            <Link className='logo-image' to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <ul>
                <li>
                    <NavLink activeclassname="active" to="/reading-list"> Reading List</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="active" to="/progress-journal"> Progress Journal</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;