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
        path: "education",
        element: (
            <>
                <Breadcrumbs />
                <Education />
            </>
        ),
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);
