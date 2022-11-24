import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootSaga from "./saga";

import themeReducer from "./theme/themeSlice";
import accountsReducer from "./features/Accounts/accounts.slice";
import authReducer from "./features/Authentication/auth.slice";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  accounts: accountsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware).concat(thunk),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
