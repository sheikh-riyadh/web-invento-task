import Main from "../layout/Main";
import AllPost from "../pages/AllPost";
import Home from "../pages/Home";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }, {
                path: '/all-post',
                element: <AllPost />
            }
        ]
    }
])