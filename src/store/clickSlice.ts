import { createSlice } from "@reduxjs/toolkit";

interface ClickState {
  value: boolean;
}

const initialState: ClickState = {
  value: false,
};

const clickSlice = createSlice({
  name: "clicked",
  initialState,
  reducers: {
    setClicked: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setClicked } = clickSlice.actions;
export default clickSlice.reducer;
