import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootSaga from "./saga";

import { api } from "api/baseApi";
import themeReducer from "./theme/themeSlice";
import sidebarReducer from "./layouts/MainLayout/Sidebar/sidebar.slice";
import accountsReducer from "./features/Accounts/accounts.slice";
import authReducer from "./features/Authentication/auth.slice";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  accounts: accountsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(sagaMiddleware)
      .concat(thunk)
      .concat(api.middleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
