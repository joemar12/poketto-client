import { AuthenticationResult } from "@azure/msal-browser";
import { UserProfile } from "./auth.slice";
export const extractUserProfileFromAuthResult = (
  authResult: AuthenticationResult
) => {
  const userProfile = {
    displayName: authResult.account.name,
    firstName: authResult.account.idTokenClaims.given_name,
    lastName: authResult.account.idTokenClaims.family_name,
    position: authResult.account.idTokenClaims.jobTitle,
    email: authResult.account.username,
  } as UserProfile;
  return userProfile;
};
