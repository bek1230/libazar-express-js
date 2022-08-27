import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: { value: [] },
  reducers: {
    filterReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { filterReducer } = filterSlice.actions;
export default filterSlice.reducer;
