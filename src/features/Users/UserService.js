import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/http-common";

export const GetUserByLogin = createAsyncThunk(
  "user/getUserByLogin",
  async (username) => await await (await http.get(`/users?username=${username}`)).data
);
