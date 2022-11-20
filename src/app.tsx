import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import routes from "./routes";
import store from "./store";

const router = createBrowserRouter(routes);

interface AppProps {
  msalInstance: IPublicClientApplication;
}

export const App = (props: AppProps) => {
  return (
    <MsalProvider instance={props.msalInstance}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MsalProvider>
  );
};
