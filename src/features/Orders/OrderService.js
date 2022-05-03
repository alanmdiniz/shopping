import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/http-common";

export const CreateOrder = createAsyncThunk(
  "order/createOrder",
  async (order) => await (await http.post("/orders", order)).data
);
