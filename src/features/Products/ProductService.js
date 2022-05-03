import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/http-common";

export const GetAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => await await (await http.get("/products")).data
);

export const GetProductsSearch = createAsyncThunk(
  "product/GetProductsSearch",
  async (word) => await await (await http.get(`/products?q=${word}`)).data
);
