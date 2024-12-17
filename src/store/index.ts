import { configureStore } from "@reduxjs/toolkit";
import clickReducer from "./clickSlice";

const store = configureStore({
  reducer: {
    clicked: clickReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
