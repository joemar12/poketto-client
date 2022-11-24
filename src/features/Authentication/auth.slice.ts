import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserProfile {
  displayName: string;
  firstName: string;
  initials: string;
  lastName: string;
  position: string;
  email: string;
}

interface AuthState {
  user: UserProfile;
  token: string;
}

const initialState = {
  user: {
    displayName: "",
    firstName: "",
    lastName: "",
    position: "",
    email: "",
  },
  token: "",
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    acquireUserProfileSuccess: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      //TODO: handle msal login error here
    },
    acquireTokenSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { acquireUserProfileSuccess, loginFailure, acquireTokenSuccess } =
  authSlice.actions;
export const selectUserDisplayName = (state: RootState) =>
  state.auth.user?.firstName;
export default authSlice.reducer;
