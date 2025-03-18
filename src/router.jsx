import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./components/NotFound/NotFound";
import OtherApi from "./components/OtherApi/OtherApi";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/combo', element: <OtherApi /> },
            { path: '*', element: <NotFound /> }
        ]
    }
])