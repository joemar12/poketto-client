import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../store";

interface themeState {
  themeName: string;
}

const initialState = {
  themeName: "light",
} as themeState;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    loadTheme: (state, action: PayloadAction<string>) => {
      state.themeName = action.payload;
    },
  },
});

export const { loadTheme } = themeSlice.actions;
export const selectThemeName = (state: RootState) => state.theme.themeName;
export default themeSlice.reducer;
