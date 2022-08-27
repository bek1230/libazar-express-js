import { createSlice } from "@reduxjs/toolkit";
export const activelandingSlice = createSlice({
  name: "activelanding",
  initialState: {
    value: "home",
  },
  reducers: {
    activelandingReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { activelandingReducer } = activelandingSlice.actions;
export default activelandingSlice.reducer;
