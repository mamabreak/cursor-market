import React, { useState } from "react";
import styles from './login.module.css'
import Header from '../Components/header'
import Register from './register_form/register_form'
import Login from './login_form/login_form'

const LoginComponent = () => {
    const [formData, setFormData] = useState({ realName: '', login: '', password: '' });
    const [isRegistering, setIsRegistering] = useState(false);
    const [users, setUsers] = useState([]);

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
                            {isRegistering ? <Register users={users} setUsers={setUsers} formData={formData} setFormData={setFormData}/> : <Login users={users} />}
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

export default LoginComponent;