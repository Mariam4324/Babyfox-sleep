import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Global.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Materials } from "./components/Materials/Materials";
import { Reviews } from "./components/Reviews/Reviews";
import { Services } from "./components/Services/Services";
import { Education } from "./pages/Education/Education";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
    const router = createBrowserRouter([
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

    return (
        <>
            <RouterProvider router={router}>
                <Header />
                <Home />
                <Services />
                <Reviews />
                <Materials />
                <Footer />
            </RouterProvider>
        </>
    );
}

export default App;
