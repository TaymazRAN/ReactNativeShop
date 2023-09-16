// photoSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk to fetch data from the API
export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const response = await fetch(
    "https://api.slingacademy.com/v1/sample-data/photos"
  );
  const data = await response.json();
  console.log("data Redux", data);
  return data;
});

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default photoSlice.reducer;
