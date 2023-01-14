import './index.css';
import { useState } from 'react';
import UserContext from '../../context/userContext';
import { useContext } from 'react';

const Login = ({ error }) => {
    const { onLogin } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isEnabled = email.length > 0 && password.length > 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(email, password);

    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleCancel = () => {
        window.history.back();
    }

    return (
        <form className='login-container' onSubmit={handleSubmit}>
            <h1>Log in</h1>
            <p>
                <label htmlFor="email">
                    Email
                </label>
                <input value={email} type="email" onChange={handleEmailChange}></input>
            </p>
            <p>
                <label htmlFor="password">
                    Password
                </label>
                <input value={password} type="password" onChange={handlePasswordChange}></input>
            </p>
            <p>
                <button type='submit' disabled={!isEnabled}>Login</button>
                <button type='button' className="cancel" onClick={handleCancel}>Cancel</button>
            </p>
            {error && <h4 className='error'>
                Incorrect password or email!
            </h4>}
        </form>
    )
}

export default Login;