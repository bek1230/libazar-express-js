import { createSlice } from "@reduxjs/toolkit";

export const modalpaydelSlice = createSlice({
  name: "modalpaydel",
  initialState: { value: "" },
  reducers: {
    modalpaydelReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { modalpaydelReducer } = modalpaydelSlice.actions;
export default modalpaydelSlice.reducer;
