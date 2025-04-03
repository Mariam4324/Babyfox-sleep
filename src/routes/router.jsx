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
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";
import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";
import { Articles } from "../pages/Articles/Articles";
import LoginForm from "../components/LoginForm/LoginForm";
import { LatestUpdateModal } from "../components/LatestUpdateModal/LatestUpdateModal";
import { ForgotPassword } from "../components/ForgotPassword/ForgotPassword";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <LatestUpdateModal />
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
                <LoginForm />
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
        element: (
            <>
                <Header />
                <Articles />
                <Footer />
            </>
        ),
    },
    {
        path: "*",
        element: (
            <>
                <NotFound />
                <ThemeToggle />
            </>
        ),
    },

    {
        path: "forgotPassword",
        element: (
            <>
                <ForgotPassword />
                <ThemeToggle />
            </>
        ),
    },

    
]);
