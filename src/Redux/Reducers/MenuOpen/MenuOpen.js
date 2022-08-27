import { createSlice } from "@reduxjs/toolkit";
export const openSlice = createSlice({
  name: "open",
  initialState: {
    value: "",
  },
  reducers: {
    openReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { openReducer } = openSlice.actions;
export default openSlice.reducer;
