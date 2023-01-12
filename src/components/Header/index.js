import Logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

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
                <li>
                    <NavLink activeclassname="active" to="/login"> <FontAwesomeIcon icon={faSignIn} /></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;