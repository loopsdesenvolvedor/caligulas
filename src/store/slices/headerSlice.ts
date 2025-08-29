import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HeaderState = {
  menuOpen: boolean;
  searchOpen: boolean;
  favoritesOpen: boolean;
  userOpen: boolean;
};

const initialState: HeaderState = {
  menuOpen: false,
  searchOpen: false,
  favoritesOpen: false,
  userOpen: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleExclusive: (state, action: PayloadAction<keyof HeaderState>) => {
      const key = action.payload;

      state[key] = !state[key];

      Object.keys(state).forEach((k) => {
        if (k !== key) {
          state[k as keyof HeaderState] = false;
        }
      });
    },

    closeAll: (state) => {
      Object.keys(state).forEach((k) => {
        state[k as keyof HeaderState] = false;
      });
    },
  },
});

export const { toggleExclusive, closeAll } = headerSlice.actions;
export const headerReducer = headerSlice.reducer;
