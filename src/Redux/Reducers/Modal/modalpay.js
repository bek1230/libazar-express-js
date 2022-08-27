import { createSlice } from "@reduxjs/toolkit";

export const modalpaySlice = createSlice({
  name: "modalpay",
  initialState: { value: false},
  reducers: {
    modalpayReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { modalpayReducer } = modalpaySlice.actions;
export default modalpaySlice.reducer;
