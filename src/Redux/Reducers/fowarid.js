import { createSlice } from "@reduxjs/toolkit";

export const fowaridSlice = createSlice({
  name: "fowarid",
  initialState: { value: 0 },
  reducers: {
    fowaridReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { fowaridReducer } = fowaridSlice.actions;
export default fowaridSlice.reducer;
