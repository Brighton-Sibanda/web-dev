// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [fontSize, setFontSize] = useState('16px');
    const [fontType, setFontType] = useState('Arial, sans-serif');

    useEffect(() => {
        document.body.className = theme; // Apply theme as a class to the body
        document.body.style.fontSize = fontSize; // Apply font size directly
        document.body.style.fontFamily = fontType; // Apply font type directly
    }, [theme, fontSize, fontType]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const changeFontSize = (size) => {
        setFontSize(size);
    };

    const changeFontType = (type) => {
        setFontType(type);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, fontSize, changeFontSize, fontType, changeFontType }}>
            {children}
        </ThemeContext.Provider>
    );
};
