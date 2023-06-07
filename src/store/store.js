import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/userSlices";
export default configureStore({
  reducer: {
    users,
  },
});
