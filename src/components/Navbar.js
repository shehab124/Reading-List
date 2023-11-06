import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const { isLightTheme, light, dark } = theme;

    const currentTheme = isLightTheme ? light : dark;

    return (
        <nav style={{ background: currentTheme.ui, color: currentTheme.syntax }}>
            <h1>Reading List</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}


export default Navbar;