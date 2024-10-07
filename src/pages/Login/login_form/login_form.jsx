import { useState } from 'react'
import styles from '../login.module.css'

const Login_form = ({users}) => {

    const [formData, setFormData] = useState({ realName: '', login: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(u => u.login === formData.login && u.password === formData.password);
        if (user) {
            console.log('Logged in:', user);
        } else {
            console.log('Invalid login credentials');
        }
        setFormData({ login: '', password: '' });
    };

    return(
        <>
        <h1 className={styles.login_label}>Log in</h1>
            <form className={styles.login_action} onSubmit={handleLogin}>
                <input className="login-input" placeholder="Email" type="email" name="login" value={formData.login} onChange={handleChange} required />
                <input className="password-input" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
                <button type="submit" className="login_button">Log in</button>
            </form>
        </>
    )
}

export default Login_form;