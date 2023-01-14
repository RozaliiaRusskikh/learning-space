import Logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../context/userContext';
import { useContext } from 'react';

function Header() {
    const { user } = useContext(UserContext);
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
                {!user.isAuthenticated &&
                    <li className='login'>
                        <NavLink activeclassname="active" to="/login"> <FontAwesomeIcon icon={faSignIn} /></NavLink>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Header;