import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/userSlices";
import posts from "./slices/postSlices";
import global from "./slices/makeGlobalSlices";

export default configureStore({
  reducer: {
    users,
    posts,
    global,
  },
});
