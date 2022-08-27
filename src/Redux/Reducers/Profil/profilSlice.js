import { createSlice } from "@reduxjs/toolkit";
import url from "../../../url.json";

const axios = require("axios");
const API_URL = url.url;

export const profilSlide = createSlice({
  name: "profil",
  initialState: {
    data: [],
  },
  reducers: {
    addprofil: (state, action) => {
      state.data.push(action.payload);
    },
    getprofil: (state, action) => {
      state.data = [action.payload];
    },
  },
});
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export const getprofilAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${data}`);
    dispatch(getprofil(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const addprofilAsync = (data) => async (dispatch) => {
  try {
    // console.log(data);
    const response = await axios.post(API_URL, data);
    // console.log(response);
    dispatch(addprofil(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { addprofil, getprofil } = profilSlide.actions;
export const showprofil = (state) => state.profile.data[0];
export default profilSlide.reducer;
