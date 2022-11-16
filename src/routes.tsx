import React, { Suspense, lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

import BaseLayout from "./layouts/BaseLayout";
import MainLayout from "./layouts/MainLayout";
import SuspenseLoader from "./components/SuspenseLoader";

function Loader<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
}

const Accounts = Loader(lazy(() => import("./content/applications/Accounts")));
const Transactions = Loader(
  lazy(() => import("./content/applications/Transactions"))
);

const SimpleDashboard = Loader(
  lazy(() => import("./content/dashboards/Simple"))
);
const DetailedDashboard = Loader(
  lazy(() => import("./content/dashboards/Detailed"))
);

const NotFound = Loader(lazy(() => import("./content/pages/Status/NotFound")));
const Maintenance = Loader(
  lazy(() => import("./content/pages/Status/Maintenance"))
);
const InternalServerError = Loader(
  lazy(() => import("./content/pages/Status/InternalServerError"))
);

const routes: RouteObject[] = [
  {
    path: "*",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="dashboards/simple" replace />,
      },
      {
        path: "home",
        element: <Navigate to="/" replace />,
      },
      {
        path: "status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />,
          },
          {
            path: "404",
            element: <NotFound />,
          },
          {
            path: "maintenance",
            element: <Maintenance />,
          },
          {
            path: "500",
            element: <InternalServerError />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "dashboards",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="simple" replace />,
      },
      {
        path: "simple",
        element: <SimpleDashboard />,
      },
      {
        path: "detailed",
        element: <DetailedDashboard />,
      },
    ],
  },
  {
    path: "management",
    element: <MainLayout />,
    children: [
      {
        path: "accounts",
        element: <Accounts />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
    ],
  },
];

export default routes;
