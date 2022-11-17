import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import store from "./store";

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
