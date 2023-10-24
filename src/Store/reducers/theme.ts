import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ValidThemeColors } from "@/Theme";

// Define a type for the slice state
interface ThemeState {
  theme: ValidThemeColors ,
  darkMode?: boolean,
}

// Define the initial state using that type
const initialState: ThemeState = {
  theme: 'default',
  darkMode: false,
}

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeState>) => {
      if (typeof action.payload.theme !== "undefined") {
        state.theme = action.payload.theme;
      }
      if (typeof action.payload.darkMode !== "undefined") {
        state.darkMode = action.payload.darkMode;
      }
    },
    setDefaultTheme: (state, action: PayloadAction<ThemeState>) => {
      if (typeof action.payload.theme !== "undefined") {
        state.theme = action.payload.theme;
      }
      if (typeof action.payload.darkMode !== "undefined") {
        state.darkMode = action.payload.darkMode;
      }
    },
  },
});

export const { changeTheme, setDefaultTheme } = slice.actions;

export const selectTheme = (state: RootState) => state.theme;

export const themeReducers = slice.reducer;
