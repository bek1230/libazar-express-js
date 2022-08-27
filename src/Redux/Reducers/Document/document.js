import { createSlice } from "@reduxjs/toolkit";
export const fileSlice = createSlice({
  name: "file",
  initialState: {
    value: "",
  },
  reducers: {
    fileReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { fileReducer } = fileSlice.actions;
export default fileSlice.reducer;
