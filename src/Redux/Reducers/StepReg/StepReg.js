import { createSlice } from "@reduxjs/toolkit";

export const stepregSlice = createSlice({
  name: "stepreg",
  initialState: { value: localStorage.getItem("step") },
  reducers: {
    stepregReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { stepregReducer } = stepregSlice.actions;
export default stepregSlice.reducer;
