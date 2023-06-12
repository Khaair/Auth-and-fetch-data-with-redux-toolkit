import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
  },
  reducers: {
    // action
    setPostList: (state, action) => {
      state.list = action?.payload;
    },
  },
});

export const { setPostList } = postSlice?.actions;

export const fetchAllPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      dispatch(setPostList(response?.data));
    })
    .catch((error) => console.log(error));
};

export default postSlice.reducer;
