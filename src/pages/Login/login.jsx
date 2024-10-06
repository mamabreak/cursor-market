import React, { useState, useEffect } from "react";
import styles from './login.module.css'
import '../../App.css';
import Header from '../Components/header'

const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ realName: '', login: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const toggleForm = () => {
        setIsRegistering(prev => !prev);
        setFormData({ realName: '', login: '', password: '' });
    }

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

    return (
        <>
            <Header />
            <main className={styles.login_page}>
                <div className={styles.user_zone}>
                    <div className="login_container">
                        <div className={styles.login_indent}>
                            <h1 className={styles.login_label}>{isRegistering ? "Registration" : "Log in"}</h1>
                            <form className={isRegistering ? styles.register_action : styles.login_action} onSubmit={isRegistering ? handleRegister : handleLogin}>
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
                                <button type="submit" className="login_button">{isRegistering ? "Sign up" : "Log in"}</button>
                            </form>
                            <div>
                                <label>{isRegistering ? "Already have an account? " : "New user? "}</label>
                                <a onClick={toggleForm} href="#!">{isRegistering ? "Log in" : "Sign up"}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
        
    );
};

export default Login;