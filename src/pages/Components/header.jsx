import React from 'react'
import styles from './header.module.css'

import darkModeSwitcher from '../../icons/dark-mode-switcher.svg';
import userIcon from '../../icons/user-icon.svg';

const Header = () => {

    return(
        <header className={styles.header}>
                <div className={styles.half_black_header}>
                    <h1 className={styles.brend_name_first_label}>Cursor</h1>
                </div>
                <div className={styles.brend_tools_container}>
                    <h1 className={styles.brend_name_second_label}>Market</h1>
                    <div className={styles.user_tools_bar}>
                        <img src={darkModeSwitcher} alt="Dark mode switcher" />
                        <img src={userIcon} alt="User Icon" />
                    </div>
                </div>
            </header>
    )
}

export default Header;