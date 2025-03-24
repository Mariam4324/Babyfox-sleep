import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
    darkMode: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "true"; // Преобразуем строку в логическое значение
    });

    useEffect(() => {
        localStorage.setItem("theme", String(darkMode)); // localhost хранит только строки
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
