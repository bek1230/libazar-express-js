import { createSlice } from "@reduxjs/toolkit";
export const emailSlice = createSlice({
  name: "email",
  initialState: {
    value: "",
  },
  reducers: {
    emailReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { emailReducer } = emailSlice.actions;
export default emailSlice.reducer;
