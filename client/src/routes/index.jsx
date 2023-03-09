import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AddNewBono from "../pages/AddNewBono";
import BonosPage from "../pages/BonosPage";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Timeline from "../pages/Timeline";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/bonos",
        element: <BonosPage />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/bonos/new",
        element: <AddNewBono />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
