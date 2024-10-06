import React, {useState, useEffect} from "react"
import Styles from './header.module.css'

import darkModeSwitcher from '../../icons/dark-mode-switcher.svg';
import userIcon from '../../icons/user-icon.svg';

const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
        console.log("Click");
    };

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    return(
        <header>
                <div className={Styles.half_black_header}>
                    <h1 className={Styles.brend_name_first_label}>Cursor</h1>
                </div>
                <div className={Styles.brend_tools_container}>
                    <h1 className={Styles.brend_name_second_label}>Market</h1>
                    <div className={Styles.user_tools_bar}>
                        <img src={darkModeSwitcher} alt="Dark mode switcher" onClick={toggleDarkMode} />
                        <img src={userIcon} alt="User Icon" />
                    </div>
                </div>
            </header>
    )
}

export default Header;