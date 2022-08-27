import { createSlice } from "@reduxjs/toolkit";

export const IsLegalSlice = createSlice({

  name: "IsLegal",
  initialState: { value: null },
  reducers: {
    IsLegalReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { IsLegalReducer } = IsLegalSlice.actions;
export default IsLegalSlice.reducer;
