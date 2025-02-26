import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <p>about us </p>,
      },
      {
        path: "/dashboard2",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard2",
            element: <h1>dashboard content</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <h1>dashboard content</h1>,
      },
    ],
  },
]);

export default router;
