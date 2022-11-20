import { RootState } from "./../../store";
import { IPublicClientApplication } from "@azure/msal-browser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserProfile {
  displayName: string;
  firstName: string;
  initials: string;
  lastName: string;
  position: string;
  email: string;
  picture: string;
}

interface UserState {
  profile: UserProfile;
}

const initialState = {
  profile: {
    displayName: "",
    firstName: "",
    initials: "",
    lastName: "",
    position: "",
    email: "",
    picture: "",
  },
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<IPublicClientApplication>
    ) => {},
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
  },
});

export const { loginSuccess, setUserProfile } = userSlice.actions;
export const selectUserEmail = (state: RootState) => state.user.profile.email;
export const selectUserProfilePicture = (state: RootState) =>
  state.user.profile.picture;
export default userSlice.reducer;
