import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoading: boolean;
  userInfo: Object;
  userToken: null;
  error: null;
  success: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
