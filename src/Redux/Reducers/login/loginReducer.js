import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: { value:localStorage.getItem('login') },
  reducers: {
    loginReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { loginReducer } = loginSlice.actions;
export default loginSlice.reducer;
