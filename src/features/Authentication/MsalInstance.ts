import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from "@azure/msal-browser";
import store from "../../store";
import { loginSuccess } from "./user.slice";
import { MsalConfig } from "./msal.config";

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
    console.log("active account: " + instance.getActiveAccount());
    store.dispatch(loginSuccess(instance)); //TODO: find a way to dispatch this
  }
});

export default instance;
