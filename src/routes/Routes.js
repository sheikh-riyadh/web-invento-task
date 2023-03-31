const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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