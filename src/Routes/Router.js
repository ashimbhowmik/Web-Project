import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Review from "../Pages/Review/Review";
import Faq from "../Pages/Faq/Faq";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/review",
        element: <Review></Review>,
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);
