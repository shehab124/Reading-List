import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {

    const { theme } = useContext(ThemeContext);

    const { isLightTheme, light, dark } = theme;
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="book-list" style={{ color: currentTheme.syntax, background: currentTheme.bg }}>
            <ul>
                <li style={{ background: currentTheme.ui }}>The way of Kings</li>
                <li style={{ background: currentTheme.ui }}>Th name of the winds</li>
                <li style={{ background: currentTheme.ui }}>The final empire</li>
            </ul>
        </div>
    )
}

export default BookList;