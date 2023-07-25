// src/redux/authActions.js

import { loginSuccess, logoutSuccess } from "../slices/authSlice";

// Simulate login with an API call to get a token
const fakeLoginAPI = async (credentials) => {
  // ... Make a request to your backend to get the authentication token
  // For demonstration purposes, we'll just use a timeout to simulate an API call.
  return new Promise((resolve) => {
    resolve({ token: credentials });
  });
};

export const login = (credentials) => async (dispatch) => {
  try {
    // Simulate login with an API call
    const response = await fakeLoginAPI(credentials);
    const { token } = response;
    console.log("credentials", credentials);

    // Dispatch login success action with the token
    dispatch(loginSuccess({ token }));
  } catch (error) {
    // Handle login failure
    console.error("Login error:", error);
  }
};

export const logout = () => (dispatch) => {
  // Dispatch logout success action
  dispatch(logoutSuccess());
};
