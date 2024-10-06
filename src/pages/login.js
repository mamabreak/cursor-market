import React, { useState, useEffect } from "react";
import './login.css';
import '../App.css';
import darkModeSwitcher from '../icons/dark-mode-switcher.png';
import userIcon from '../icons/user-icon.png';

const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ realName: '', login: '', password: '' });

    const toggleForm = () => setIsRegistering(prev => !prev);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (users.some(u => u.login === formData.login)) {
            console.log("User already exists");
            return;
        }
        
        const newUser = {
            realName: formData.realName,
            login: formData.login,
            password: formData.password,
            dateOfRegistration: new Date().toISOString(),
            likedCursors: [],
            uploads: 0,
            hobby: "Horsing",
        };

        window.show = {
            users: () => console.log(users),
        };

        setUsers(prevUsers => [...prevUsers, newUser]);
        console.log('We have a new user now:', newUser);
        setFormData({ realName: '', login: '', password: '' });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(u => u.login === formData.login && u.password === formData.password);
        if (user) {
            console.log('Logged in:', user);
            setFormData({ realName: '', login: '', password: '' });
        } else {
            console.log('Invalid login credentials');
        }
    };

    const clearOnClick = () => {
        setFormData({ realName: '', login: '', password: '' });
    }

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    return (
        <div className="login-page">
            <header>
                <div className="half-black-header">
                    <h1 className="brend-name-first-label">Cursor</h1>
                </div>
                <div className="brend-tools-container">
                    <h1 className="brend-name-second-label">Market</h1>
                    <div className="user-tools-bar">
                        <div className="{isDarkMode ? 'dark-mode : light-mode">
                            <img src={darkModeSwitcher} alt="Dark mode switcher" className="dark-mode-switcher" onClick={toggleDarkMode} />
                        </div>
                        <img src={userIcon} alt="User Icon" className="user-icon" />
                    </div>
                </div>
            </header>
            <div className="user-zone">
                <div className="login-container">
                    <div className="login-indent">
                        <h1 className="login-label">{isRegistering ? "Register" : "Login"}</h1>
                        <form className={isRegistering ? "register-action" : "login-action"} onSubmit={isRegistering ? handleRegister : handleLogin}>
                            {isRegistering ? (
                                <>
                                    <input className="name-input" placeholder="Real Name" type="text" name="realName" value={formData.realName} onChange={handleChange} required />
                                    <input className="login-input" placeholder="Email" type="email" name="login" value={formData.login} onChange={handleChange} required />
                                    <input className="password-input" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
                                </>
                            ) : (
                                <>
                                    <input className="login-input" placeholder="Email" type="email" name="login" value={formData.login} onChange={handleChange} required />
                                    <input className="password-input" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
                                </>
                            )}
                            <button type="submit" className="login-button">{isRegistering ? "Register" : "Login"}</button>
                        </form>
                        <div className="new-user">
                            <label>{isRegistering ? "Already have an account? " : "New user? "}</label>
                            <a className="register-click" onClick={() => {toggleForm(); clearOnClick();}} href="#!">{isRegistering ? "Login" : "Sign up"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;