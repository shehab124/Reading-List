import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Toggle = ({ theme, setTheme }) => {

    const { isLightTheme } = theme;

    setTheme({
        ...theme,
        isLightTheme: !isLightTheme
    });

}

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button onClick={() => Toggle({ theme, setTheme })}>Toggle the theme</button>
    )
}

export default ThemeToggle;