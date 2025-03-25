import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./components/NotFound/NotFound";
import WholesaleSales from "./components/WholesaleSales/WholesaleSales";
import OtherApi from "./components/OtherApi/OtherApi";
import Macarons from "./components/Macarons/Macarons";
import Kachestwo from "./pages/Kachestvo/Kachestwo";
import Auth from "./components/auth/Auth";
import CartPage from "./pages/CartPage/CartPage";
import Contact from "./pages/Contact/Contact";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/combo', element: <OtherApi /> },
            { path: '*', element: <NotFound /> },
            { path: '*', element: <NotFound /> },
            { path: '/WholesaleSales', element: <WholesaleSales />},
            { path: '/prodaji', element: <Macarons />},
            { path: '/kachestvo', element: <Kachestwo />},
            { path: '/register', element: <Auth />},
            { path: '/cart', element: <CartPage /> },
            { path: '/contact', element: <Contact /> },

        ]
    }
])