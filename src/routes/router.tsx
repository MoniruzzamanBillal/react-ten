import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { AddTender, ManageTender } from "@/pages";

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
      {
        path: "/dashboard/admin/manage-tender",
        element: <ManageTender />,
      },
      {
        path: "/dashboard/admin/add-tender",
        element: <AddTender />,
      },
    ],
  },
]);

export default router;
