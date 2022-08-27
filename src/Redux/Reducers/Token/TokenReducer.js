import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: { value:localStorage.getItem('token') },
  reducers: {
    tokenReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { tokenReducer } = tokenSlice.actions;
export default tokenSlice.reducer;
