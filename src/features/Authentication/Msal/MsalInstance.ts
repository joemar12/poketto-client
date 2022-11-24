import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from "@azure/msal-browser";
import { MsalConfig } from "./msal.config";
import store from "../../../store";
import { acquireTokenSuccess, acquireUserProfileSuccess } from "../auth.slice";
import { extractUserProfileFromAuthResult } from "../utils";

const instance = new PublicClientApplication(MsalConfig);
const accounts = instance.getAllAccounts();
if (accounts.length > 0) {
  instance.setActiveAccount(accounts[0]);
}

instance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    instance.setActiveAccount(account);
    const userProfile = extractUserProfileFromAuthResult(payload);
    store.dispatch(acquireUserProfileSuccess(userProfile));
  } else if (
    event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS &&
    event.payload
  ) {
    const payload = event.payload as AuthenticationResult;
    const userProfile = extractUserProfileFromAuthResult(payload);
    store.dispatch(acquireUserProfileSuccess(userProfile));
    store.dispatch(acquireTokenSuccess(payload.accessToken));
  }
});

export default instance;
