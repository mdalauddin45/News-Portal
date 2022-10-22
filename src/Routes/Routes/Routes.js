import { createBrowserRouter } from "react-router-dom";

import Main from "../../layout/Main";
import Login from "../../Login/Login";
import TermsAndConditions from "../../Others/TermsAndConditions";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Register from "../../Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://server-pied-gamma.vercel.app/news`),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://server-pied-gamma.vercel.app/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-pied-gamma.vercel.app/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
]);
