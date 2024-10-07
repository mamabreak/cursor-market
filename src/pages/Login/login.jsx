import React, { useState } from "react";
import styles from './login.module.css'
import Header from '../Components/header'
import Register from './register_form/register_form'
import Login from './login_form/login_form'

const LoginComponent = () => {
    const [formData, setFormData] = useState({ realName: '', login: '', password: '' });
    const [isRegistering, setIsRegistering] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };    

    const toggleForm = () => {
        setIsRegistering(prev => !prev);
        setFormData({ realName: '', login: '', password: '' });
    }

    return (
        <>
            <Header />
            <main className={styles.login_page}>
                <div className={styles.user_zone}>
                    <div className={styles.login_container}>
                        <div className={styles.login_indent}>
                            {isRegistering ? <Register handleChange={handleChange} /> : <Login />}
                            <div>
                    <label>New user? </label>
                    <a onClick={toggleForm} href="#!">Sign up</a>
                    </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default LoginComponent;