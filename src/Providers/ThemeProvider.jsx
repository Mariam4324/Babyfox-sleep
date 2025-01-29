import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode((prevTheme) => !prevTheme);
    };

    const themeData = {
        darkMode,
        toggleTheme,
    };

    return <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>;
};
