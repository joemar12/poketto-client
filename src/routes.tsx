import React, { Suspense, lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

import BaseLayout from "./layouts/BaseLayout";
import MainLayout from "./layouts/MainLayout";
import SuspenseLoader from "./components/SuspenseLoader";
import { RequireAuth } from "./features/Authentication";

function Loader<T>(Component: React.ComponentType<T>, requiresAuth = false) {
  return (props: T) => (
    <Suspense fallback={<SuspenseLoader />}>
      {requiresAuth ? (
        <RequireAuth loginRoute="/login" replace>
          <Component {...props} />
        </RequireAuth>
      ) : (
        <Component {...props} />
      )}
    </Suspense>
  );
}

const Login = Loader(lazy(() => import("./pages/Login")));

const Accounts = Loader(
  lazy(() => import("./features/Accounts")),
  true
);
const Transactions = Loader(lazy(() => import("./features/Transactions")));

const SimpleDashboard = Loader(lazy(() => import("./pages/Dashboards/Simple")));
const DetailedDashboard = Loader(
  lazy(() => import("./pages/Dashboards/Detailed"))
);

const NotFound = Loader(lazy(() => import("./pages/Status/NotFound")));
const Maintenance = Loader(lazy(() => import("./pages/Status/Maintenance")));
const InternalServerError = Loader(
  lazy(() => import("./pages/Status/InternalServerError"))
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
        path: "login",
        element: <Login />,
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
