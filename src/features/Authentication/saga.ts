import { IPublicClientApplication } from "@azure/msal-browser";
import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, call, put, all } from "redux-saga/effects";
import { loginSuccess, setUserProfile, UserProfile } from "./user.slice";
import { LoginRequest, GraphConfig } from "./msal.config";

export function* accountsSaga() {
  yield takeLatest(loginSuccess.type, getUserProfile);
}

function* getMsGraphProfile(accessToken: string): any {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(GraphConfig.profileEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

function* getMsGraphProfilePicture(accessToken: string): any {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);
  headers.append("Content-Type", "image/jpg");

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(GraphConfig.profilePictureEndpoint, options)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => blob)
    .catch((error) => console.log(error));
}

function* getUserProfile(action: PayloadAction<IPublicClientApplication>): any {
  console.log("getUserProfile");
  const msalInstance = action.payload;
  const activeAccount = msalInstance.getActiveAccount();
  if (activeAccount != null) {
    const tokenResponse = yield call(msalInstance.acquireTokenSilent, {
      ...LoginRequest,
      account: activeAccount,
    });

    const [profileResponse, profilePictureReponse] = yield all([
      call(getMsGraphProfile, tokenResponse),
      call(getMsGraphProfilePicture, tokenResponse),
    ]);
    const url = window.URL || window.webkitURL;
    const blobUrl = url.createObjectURL(profilePictureReponse as Blob);
    const userProfile = {
      displayName: profileResponse.displayName,
      firstName: profileResponse.givenName,
      lastName: profileResponse.surname,
      email: profileResponse.userPrincipalName,
      position: profileResponse.jobTitle,
      picture: blobUrl,
    } as UserProfile;
    yield put(setUserProfile(userProfile));
  }
}
