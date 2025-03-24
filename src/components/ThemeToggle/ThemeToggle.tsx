import React from "react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";

export const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    if (!ThemeContext) {
        // Обработка случая, когда контекст равен null
        return null; // или можно вернуть какой-то запасной UI
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <button onClick={toggleTheme} className={`fixed bottom-4 left-4 z-50 p-2 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 ${darkMode ? "bg-yellow-300 text-gray-800" : "bg-gray-800 text-white"}`} title="Сменить тему">
            <span className="text-2xl">{darkMode ? "🌞" : "🌙"}</span>
        </button>
    );
};
