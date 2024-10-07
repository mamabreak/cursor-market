import React, { useState } from "react";
import { Link } from 'react-router-dom'
import styles from './login.module.css'
import Header from '../Components/header'

const LoginComponent = () => {

    const [formData, setFormData] = useState({
        realName: '',
        login: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
    
        // Retrieve existing users from localStorage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
        // Find the user based on the login (email)
        const user = storedUsers.find(u => u.login === formData.login);
    
        // Check if user exists and password matches
        if (user && user.password === formData.password) {
            console.log('Logged in:', user);
            // You can set user data to context or state to maintain login session
        } else {
            console.log('Invalid login credentials');
            // Update formData to show an error message in the login input
            setFormData(prevData => ({ ...prevData, login: 'Invalid login or password!' }));
        }
    
        // Reset password field after checking
        setFormData(prevData => ({ ...prevData, password: '' }));
    };
    

    return (
        <>
        <Header />
        <main className={styles.login_page}>
            <div className={`${styles.user_zone} ${styles.display_flex} ${styles.center_common} ${styles.center_items}`}>
                <div className={`${styles.login_container} ${styles.center_common} ${styles.center_items}`}>
                    <div className={`${styles.login_spacing} ${styles.center_common} ${styles.column_direction} ${styles.spacing_between}`}>
                        <h1 className={styles.important_labels}>Log in</h1>
                        <form className={`${styles.login_action} ${styles.spacing_between} ${styles.column_direction} ${styles.center_common}`} onSubmit={handleLogin}>
                            <input className="login-input" placeholder="Email" type="email" name="login" value={formData.login} onChange={handleChange} required />
                            <input className="password-input" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
                            <button type="submit" className="login_button">Log in</button>
                        </form>
                    <div>
                        <label>Are you new user? </label>
                        <Link to="/sign-up">Sign up</Link>
                    </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
};

export default LoginComponent;