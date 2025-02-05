import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { Services } from "../components/Services/Services";
import { Materials } from "../components/Materials/Materials";
import { Reviews } from "../components/Reviews/Reviews";
import { Footer } from "../components/Footer/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { Education } from "../pages/Education/Education";
import { NotFound } from "../pages/NotFound/NotFound";
import Login from "../components/Login/Login";
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";
import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";
import { Articles } from "../pages/Articles/Articles";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Home />
                <Services />
                <Reviews />
                <Materials />
                <Footer />
            </>
        ),
    },
    {
        path: "login",
        element: (
            <>
                <Login />
                <ThemeToggle />
            </>
        ),
    },
    {
        path: "registration",
        element: (
            <>
                <RegistrationForm />
                <ThemeToggle />
            </>
        ),
    },

    {
        path: "education",
        element: (
            <>
                <Breadcrumbs />
                <Education />
            </>
        ),
    },
    {
        path: "articles",
        element: <Articles />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
