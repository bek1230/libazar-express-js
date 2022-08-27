import { createSlice } from "@reduxjs/toolkit";
export const langSlice = createSlice({
  name: "lang",
  initialState: {
    value:localStorage.getItem("lan"),
  },
  reducers: {
    langReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { langReducer } = langSlice.actions;
export default langSlice.reducer;
