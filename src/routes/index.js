import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Dashboard";
import DashboardChild from "../DashboardChild";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: ":id",
        element: <DashboardChild />,
      },
    ],
  },
]);

export default Routes;
