import { React } from 'react'
import styles from '../login.module.css'

const Register_form = ({users, setUsers, formData, setFormData}) => {

    // const [formData, setFormData] = useState({ realName: '', login: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value || ''}));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (users.some(u => u.login === formData.login)) {
            console.log("User already exists");
            setFormData(prevData => ({...prevData, login: 'Login already exists!'}));
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
        setFormData({login: '', password: '', realName: 'Success!'});
    };

    return(
        <>
        <h1 className={styles.login_label}>Sign up</h1>
        <form className={styles.register_action} onSubmit={handleRegister}>
            <input className="name-input" placeholder="Real Name" type="text" name="realName" value={formData.realName} onChange={handleChange} required />
            <input className="login-input" placeholder="Email" type="email" name="login" value={formData.login} onChange={handleChange} required />
            <input className="password-input" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
            <button type="submit">Sign up</button>
        </form>
        </>
    )
}

export default Register_form;