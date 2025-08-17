import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    toggleSearch: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
