import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "true"; // Преобразуем строку в логическое значение
    });
    useEffect(() => {
        localStorage.setItem("theme", darkMode);
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prevTheme) => !prevTheme);
    };

    const themeData = {
        darkMode,
        toggleTheme,
    };

    return <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>;
};
