import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/Layout.css'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from "react-router-dom";
import TheHeader from "./components/TheHeader.jsx";
import TheFooter from "./components/TheFooter.jsx";

const Layout = () => (
    <>
        <div className="wrapper">
            <TheHeader />
            <Outlet />
        </div>
        <TheFooter/>
    </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Wrap routes with the Layout component
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "special-offers",
                element: <div>Special Offers Page</div>
            },
            {
                path: "the-process",
                element: <div>The Process Page</div>
            },
            {
                path: "packing",
                element: <div>Packing Page</div>
            },
            {
                path: "about",
                element: <div>About Page</div>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
