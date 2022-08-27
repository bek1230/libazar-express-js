import { createSlice } from "@reduxjs/toolkit";

export const modalapplicSlice = createSlice({
  name: "modalapplic",
  initialState: { value: false },
  reducers: {
    modalapplicReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { modalapplicReducer } = modalapplicSlice.actions;
export default modalapplicSlice.reducer;
