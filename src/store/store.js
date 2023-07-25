// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import users from "./slices/userSlices";
import posts from "./slices/postSlices";
import authReducer from "./slices/authSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isAuthenticated"], // These keys will be persisted
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    users,
    posts,
  },
});

const persistor = persistStore(store);

// Give a name to the exported object before exporting as module default
const reduxStore = { store, persistor };

export default reduxStore;
