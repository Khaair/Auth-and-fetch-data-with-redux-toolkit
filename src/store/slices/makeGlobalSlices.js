// arraySlice.js
import { createSlice } from "@reduxjs/toolkit";

const arraySlice = createSlice({
  name: "global",
  initialState: [],

  reducers: {
    setArray: (state, action) => {
      return action.payload;
    },
  },
});

export const { setArray } = arraySlice.actions;
export default arraySlice.reducer;
