import instance from "./Msal/MsalInstance";
import RequireAuth from "./RequireAuth";
import userReducer from "./auth.slice";
import {
  acquireUserProfileSuccess,
  loginFailure,
  selectUserDisplayName,
} from "./auth.slice";
import { MsalConfig, LoginRequest } from "./Msal/msal.config";

export {
  instance as MsalInstance,
  MsalConfig,
  LoginRequest,
  RequireAuth,
  userReducer,
  loginFailure,
  acquireUserProfileSuccess as loginSuccess,
  selectUserDisplayName,
};
