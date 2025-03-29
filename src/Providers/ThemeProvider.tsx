import { createContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
    darkMode: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    darkMode: false,
    toggleTheme: () => {}
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "true";
    });

    useEffect(() => {
        localStorage.setItem("theme", String(darkMode));
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