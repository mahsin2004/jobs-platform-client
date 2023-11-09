import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Jobs from "../allJobs/Jobs";
import AddJob from "../pages/AddJob";
import AppliedJobs from "../pages/AppliedJobs";
import MyJobs from "../pages/MyJobs";
import PrivetRoute from "./PrivetRoute";
import Details from "../component/Details";
import Update from "../component/Update";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/addJob",
        element: (
          <PrivetRoute>
            <AddJob></AddJob>
          </PrivetRoute>
        ),
      },
      {
        path: "/jobs", //All jobs
        element: <Jobs></Jobs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivetRoute>
            <AppliedJobs></AppliedJobs>
          </PrivetRoute>
        ),
      },
      {
        path: "/myJobs",
        element: (
          <PrivetRoute>
            <MyJobs></MyJobs>
          </PrivetRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jobs-platform-server.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://jobs-platform-server.vercel.app/jobs/${params.id}`),
      },
    ],
  },
]);

export default Router;
