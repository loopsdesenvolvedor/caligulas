import { createSlice } from "@reduxjs/toolkit";

type SearchState = {
  isOpen: boolean;
};

const initialState: SearchState = {
  isOpen: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openSearch(state) {
      state.isOpen = true;
    },
    closeSearch(state) {
      state.isOpen = false;
    },

    toggleSearch(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { closeSearch, openSearch, toggleSearch } = searchSlice.actions;

export default searchSlice.reducer;
