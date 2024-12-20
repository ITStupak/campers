import { createSlice } from '@reduxjs/toolkit';
import { fetchOneCamper, fetchAllCampers } from './operations.js';

const INITIAL_STATE = {
    campers: [],
    total: 0,
    error: null,
    isLoading: false,
  }

const campersSlice = createSlice({
  name: 'campers',
  initialState: INITIAL_STATE,
  extraReducers: (bundler) => bundler        
    .addCase(fetchAllCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(fetchAllCampers.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.campers = payload;
        state.total = payload;
    })
    .addCase(fetchAllCampers.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.campers = [];
        state.error = payload;
    })
    
    .addCase(fetchOneCamper.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(fetchOneCamper.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.campers = payload;
        state.total = payload;
    })
    .addCase(fetchOneCamper.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.campers = [];
        state.error = payload;
    })
});

export const campersReducer = campersSlice.reducer;