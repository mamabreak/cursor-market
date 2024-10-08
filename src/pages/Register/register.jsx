import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing
import styles from '../Register/register.module.css';
import Header from '../Components/header';

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        realName: '',
        login: '',
        password: '',
    });

    const navigate = useNavigate(); // Initialize useNavigate for redirection

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        if (storedUsers.some(u => u.login === formData.login)) {
            console.log("User already exists");
            setFormData(prevData => ({ ...prevData, login: 'Login already exists!' }));
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
        const updatedUsers = [...storedUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        console.log('We have a new user now:', newUser);
        setFormData({ login: '', password: '', realName: 'Success!' });
        navigate('/log-in'); // Redirect to login page
    };

    return (
        <>
            <Header />
            <main className={styles.login_page}>
                <div className={`${styles.user_zone} ${styles.display_flex} ${styles.center_common} ${styles.center_items}`}>
                    <div className={`${styles.login_container} ${styles.center_common} ${styles.center_items}`}>
                        <div className={`${styles.login_spacing} ${styles.center_common} ${styles.column_direction} ${styles.spacing_between}`}>
                            <h1 className={styles.important_labels}>Sign up</h1>
                            <form className={`${styles.register_action} ${styles.spacing_between} ${styles.column_direction} ${styles.center_common}`} onSubmit={handleRegister}>
                                <input className="name-input" placeholder="Real Name" type="text" name="realName" value={formData.realName} onChange={handleChange} required />
                                <input className="login-input" placeholder="Email" type="email" name="login" value={formData.login} onChange={handleChange} required />
                                <input className="password-input" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
                                <button type="submit">Sign up</button>
                            </form>
                            <div>
                                <label>Have an account? </label>
                                <Link to="/log-in">Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default RegisterForm;