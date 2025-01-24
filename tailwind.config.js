// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Nunito: "Nunito",
            },
            colors: {
                dark_purple: "#000235",
                btn_primary: "#7e7ee3",
                heading_color: "#abd9d9",
            },
        },
    },
    plugins: [],
};
