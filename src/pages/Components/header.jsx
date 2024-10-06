import React, {useState, useEffect} from "react"

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
                <div className="half-black-header">
                    <h1 className="brend-name-first-label">Cursor</h1>
                </div>
                <div className="brend-tools-container">
                    <h1 className="brend-name-second-label">Market</h1>
                    <div className="user-tools-bar">
                        <img src={darkModeSwitcher} alt="Dark mode switcher" className="dark-mode-switcher" onClick={toggleDarkMode} />
                        <img src={userIcon} alt="User Icon" className="user-icon" />
                    </div>
                </div>
            </header>
    )
}

export default Header;