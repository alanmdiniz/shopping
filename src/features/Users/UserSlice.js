import { createSlice } from "@reduxjs/toolkit";
import { GetUserByLogin } from "./UserService";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogged: null,
    error: null,
  },
  reducers: {
    logout: (state, action) => {
      state.userLogged = null;
    },
  },
  extraReducers: {
    [GetUserByLogin.fulfilled]: (state, action) => {
      state.userLogged = action.payload;
    },
    [GetUserByLogin.rejected]: (state, action) => {
      state.userLogged = null;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;