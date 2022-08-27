import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: {} },
  reducers: {
    userReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { userReducer } = userSlice.actions;
export default userSlice.reducer;
