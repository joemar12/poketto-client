import { Configuration, PopupRequest } from "@azure/msal-browser";

export const MsalConfig: Configuration = {
  auth: {
    clientId: process.env.MSAL_CLIENT_ID,
    authority: process.env.MSAL_AUTHORITY,
    redirectUri: process.env.BASE_URL,
    postLogoutRedirectUri: process.env.MSAL_POST_LOGOUT_URI,
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const LoginRequest: PopupRequest = {
  scopes: ["User.Read"],
};

export const GraphConfig = {
  profileEndpoint: "https://graph.microsoft.com/beta/me",
  profilePictureEndpoint: "https://graph.microsoft.com/beta/me/photo/$value",
};
