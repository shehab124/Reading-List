import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const currentTheme = isLightTheme ? light : dark;

    const { books } = useContext(BookContext);

    return (
        <div className="navbar">
            <h1>Chehab's Reading List</h1>
            <p>Currently you have {books.length} </p>
        </div>
    )
}
// <nav style={{ background: currentTheme.ui, color: currentTheme.syntax }}>
//     <h1>Reading List</h1>
//     <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>
// </nav>

export default Navbar;