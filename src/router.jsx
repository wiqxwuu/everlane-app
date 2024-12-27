import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Women from "./pages/Women";
import Men from "./pages/Men";
import About from './pages/About'
import Everworld from './pages/Everworld'

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Women />
            },
            {
                path: "men",
                element: <Men />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "everworld-stories",
                element: <Everworld />
            },
        ]
    }
])