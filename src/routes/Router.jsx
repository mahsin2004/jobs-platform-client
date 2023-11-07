import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Jobs from "../allJobs/Jobs";
import AddJob from "../pages/AddJob";


const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addJob",
        element: <AddJob></AddJob>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

export default Router;