import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

import themeReducer from "./theme/themeSlice";
import accountsReducer from "./features/Accounts/accounts.slice";
import userReducer from "./features/Authentication/user.slice";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  accounts: accountsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
