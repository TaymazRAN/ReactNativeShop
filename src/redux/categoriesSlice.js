// categorieslice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoriesData from "./../../../data/categories.json";

// Define an async thunk to fetch data from the API
export const fetchcategories = createAsyncThunk(
  "categories/fetchcategories",
  async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    console.log("data Redux categories", data);
    return data;
  }
);

const categorieslice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchcategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchcategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorieslice.reducer;
