// tailwind.config.js
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Nunito: "Nunito",
            },

            colors: {
                primary: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" },
                dark_purple: "#000235",
                btn_primary: "#7e7ee3",
                heading_color: "#abd9d9",
            },
        },
    },
    plugins: [],
};
