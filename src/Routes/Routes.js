import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";

import errorPhoto from "../Img/errorPhoto.png";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },
    {
        path: '*',
        element: <div className="max-w-screen-2xl mx-auto my-10"><img className="mx-auto" src={errorPhoto} alt="" /></div>
    }
]);