import { createSlice } from "@reduxjs/toolkit";

export const modaldocSlice = createSlice({
  name: "modaldoc",
  initialState: { value: false},
  reducers: {
    modaldocReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { modaldocReducer } = modaldocSlice.actions;
export default modaldocSlice.reducer;
