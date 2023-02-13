import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);  
    }

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>{children}</ThemeContext.Provider>
    );
}

export default ThemeContext;