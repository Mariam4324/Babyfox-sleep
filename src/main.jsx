import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { ThemeProvider } from "./Providers/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </ThemeProvider>
);
