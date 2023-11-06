import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );

}

//class ThemeContextProvider extends Component {
//    state = {
//        isLightTheme: true,
//        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
//        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
//    } 
//    render() {
//        return (
//            <ThemeContext.Provider value={{ ...this.state }}>
//                {this.props.children}
//            </ThemeContext.Provider>
//        );
//    }
//}

export default ThemeContextProvider;