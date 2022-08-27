import { createSlice } from "@reduxjs/toolkit";

export const openCategorySlice = createSlice({
  name: "openCategory",
  initialState: { value: "" },
  reducers: {
    openCategoryReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { openCategoryReducer } = openCategorySlice.actions;
export default openCategorySlice.reducer;
