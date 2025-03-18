import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./components/NotFound/NotFound";
import OtherApi from "./components/OtherApi/OtherApi";
import WholesaleSales from "./pages/WholesaleSales/WholesaleSales";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/combo', element: <OtherApi /> },
            { path: '*', element: <NotFound /> },
            // { path: '/contact', element: <Contact /> },
            { path: '*', element: <NotFound /> },
            { path: 'WholesaleSales', element: <WholesaleSales />}
        ]
    }
])