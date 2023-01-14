import Logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../context/userContext';
import { useContext } from 'react';

function Header() {
    const { user, onLogout } = useContext(UserContext);

    const handleLogoutClick = (event) => {
        event.preventDefault();
        onLogout()
    }

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
                {user.isAuthenticated
                    ?
                    <li className='logout'>
                        <FontAwesomeIcon onClick={handleLogoutClick} icon={faSignOut} />
                    </li>
                    :
                    <li className='login'>
                        <NavLink activeclassname="active" to="/login"> <FontAwesomeIcon icon={faRocket} /></NavLink>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Header;