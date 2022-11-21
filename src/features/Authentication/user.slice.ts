import { RootState } from "./../../store";
import { AuthenticationResult } from "@azure/msal-browser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserProfile {
  displayName: string;
  firstName: string;
  initials: string;
  lastName: string;
  position: string;
  email: string;
}

interface UserState {
  profile: UserProfile;
}

const initialState = {
  profile: {
    displayName: "",
    firstName: "",
    lastName: "",
    position: "",
    email: "",
  },
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserProfileSuccess: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
    getUserProfileFailure: (state, action: PayloadAction<string>) => {
      //TODO: handle MS Graph profile request error
    },
  },
});

export const { getUserProfileSuccess, getUserProfileFailure } =
  userSlice.actions;
export const selectUserDisplayName = (state: RootState) =>
  state.user.profile?.firstName;
export default userSlice.reducer;
