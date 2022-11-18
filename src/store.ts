import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

import themeReducer from "./theme/themeSlice";
import accountsReducer from "./content/applications/Accounts/accountsSlice";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  theme: themeReducer,
  accounts: accountsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
